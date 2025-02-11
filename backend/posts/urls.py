from django.urls import path

from .views import post_per_tags_list_view , post_list_view , createPost_view

urlpatterns = [

    path('club/create_post/', createPost_view),
    path('retreive_post/', post_list_view),
    path('filter_post/', post_per_tags_list_view),
]
