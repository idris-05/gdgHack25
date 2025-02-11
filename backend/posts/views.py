from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from shared.models import Post , Tag
from shared.permissions import IsClub
from .serializer import PostSerializer
from rest_framework.permissions import IsAuthenticated


class CreatePostAPIView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated,IsClub]
createPost_view = CreatePostAPIView.as_view()


class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

post_list_view = PostListView.as_view()


class PostPerTagsListView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.all()
        tag_names = self.request.query_params.getlist("tags")  # Get list of tags from URL

        if tag_names:
            queryset = queryset.filter(tags__name__in=tag_names).distinct()

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
post_per_tags_list_view = PostPerTagsListView.as_view()
