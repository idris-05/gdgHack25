from django.urls import path

from .views import CreatePostAPIView

urlpatterns = [

    path('club/create_post', CreatePostAPIView.as_view()),
]
