from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from shared.permissions import IsClub
from shared.models import Resource
from .serializers import ResourceCreateSerializer , ResourceListSerializer


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
