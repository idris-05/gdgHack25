from django.shortcuts import render

# Create your views here.

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