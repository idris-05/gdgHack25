from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from shared.permissions import IsClub
from shared.models import Resource, Roadmap, LessonPart, Test
from .serializers import ResourceCreateSerializer , ResourceListSerializer,RoadmapRequeteSerializer

import google.generativeai as genai
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ResourceCreateView(generics.CreateAPIView):
    serializer_class = ResourceCreateSerializer
    permission_classes = [permissions.IsAuthenticated, IsClub]
    parser_classes = [MultiPartParser, FormParser]

class ResourceListView(generics.ListAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceListSerializer
    permission_classes = [permissions.IsAuthenticated , IsClub]

class ResourceDetailView(generics.RetrieveAPIView):
    queryset = Resource.objects.prefetch_related("tags", "club")
    serializer_class = ResourceListSerializer
    permission_classes = [permissions.IsAuthenticated, IsClub]


class GenerateRoadmapAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        course_title = request.data.get("title")
        if not course_title:
            return Response({"error": "Title is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Fetch necessary resources
        resources = Resource.objects.all()
        resources_data = [
            {
                "name": res.name,
                "description": res.description,
                "tags": list(res.tags.values_list("name", flat=True)),
                "level": res.level,
            }
            for res in resources
        ]

        # Generate roadmap using Gemini API
        genai.configure(api_key=settings.GEMINI_API_KEY)
        model = genai.GenerativeModel("gemini-pro")
        prompt = f"Generate an ordered roadmap for the course '{course_title}'. Use the following resources: {resources_data}. Each lesson should contain one resource and a dynamically generated QCM test. No explanations for QCM answers."
        response = model.generate_content(prompt)

        if not response or "error" in response:
            return Response({"error": "Failed to generate roadmap"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        roadmap_data = response.text  # Assuming Gemini API returns structured JSON

        # Save roadmap to database
        roadmap = Roadmap.objects.create(
            title=course_title,
            author=request.user.club,
            description=f"Roadmap for {course_title}",
            visibility="private"
        )

        for lesson in roadmap_data.get("lessons", []):
            resource = Resource.objects.filter(name=lesson["resource_name"]).first()
            if resource:
                test = Test.objects.create(
                    liste_question=lesson["test"]["questions"],
                    reponses=lesson["test"]["answers"]
                )
                LessonPart.objects.create(resource=resource, test=test, roadmap=roadmap)

        return Response(RoadmapRequeteSerializer(roadmap).data, status=status.HTTP_201_CREATED)

Generate_Roadmap_APIView_ =GenerateRoadmapAPIView.as_view()