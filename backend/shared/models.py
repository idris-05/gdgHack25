from django.db import models
from django.contrib.auth.models import User
from .tagsChoices import TagChoices


# Enum for visibility
class Visibility(models.TextChoices):
    PRIVATE = "private", "Private"
    PUBLIC = "public", "Public"


# Enum for tags (managed by admin)
class Tag(models.Model):
    name = models.CharField(
        max_length=50,
        choices=TagChoices.choices,  # Restrict values to predefined choices
        unique=True,
    )

    def __str__(self):
        return self.name


class Alumni(models.Model):
    username = models.CharField(max_length=255)
    def __str__(self):
        return f"Alumni: {self.id} - {self.user.username}"

class Club(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.URLField(blank=True , null = True) #! Stored in Firebase
    description = models.TextField()
    number_of_followers = models.IntegerField(default=0)
    alumni = models.ManyToManyField(Alumni, related_name="alumnis_club",blank=True )
    def __str__(self):
        return f"Club: {self.id} - {self.user.username}"




# Resource Model
class Resource(models.Model):
    name = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    tags = models.ManyToManyField(Tag, related_name="resources")
    club = models.ForeignKey(Club, related_name="resources", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    file_url = models.URLField()  #! Stored in Firebase
    level = models.IntegerField(choices=[(50, "beginner"), (100, "Medium"), (150, "Advanced")])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# Test Model : QCM
class Test(models.Model):
    id = models.AutoField(primary_key=True)
    liste_question = models.JSONField()
    reponses = models.JSONField()


# Roadmap Model
class Roadmap(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Club, related_name="roadmaps", on_delete=models.CASCADE)
    description = models.TextField()
    tags = models.ManyToManyField(Tag, related_name="roadmaps")
    visibility = models.CharField(max_length=10, choices=Visibility.choices, default=Visibility.PRIVATE)


# Lesson Part Model
class LessonPart(models.Model):
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    test = models.ForeignKey(Test, on_delete=models.CASCADE, null=True, blank=True)
    roadmap = models.ForeignKey(Roadmap, related_name="lesson_parts", on_delete=models.CASCADE)


# Post Model
class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date_debut = models.DateTimeField(auto_now_add=True)
    #! FIRE BASE
    image_url = models.URLField(blank=True, null=True)
    tags = models.ManyToManyField(Tag, related_name="posts")
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(Club, related_name="posts", on_delete=models.CASCADE)

# Project Post Model
class Project(Post):
    github_link = models.URLField()


# Event Post Model
class Event(Post):
    pass



class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    club_suivi = models.ManyToManyField(Club, related_name="students_suivi")
    club_joined = models.ManyToManyField(Club,  related_name="students_joined")
    roadmap_enroll = models.ManyToManyField(Roadmap,  related_name="students_enrolled")
    agenda_events = models.ManyToManyField(Event, related_name="students_agenda")

    def __str__(self):
        return f"Student: {self.id} - {self.user.username}"


class PostInteraction(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="post_interactions")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="interactions")
    liked = models.BooleanField(default=False)  # Tracks if user liked the post
    saved_to_agenda = models.BooleanField(default=False)  # Tracks if user saved the post to their agenda
    consulted = models.IntegerField(default=0)  # Tracks if user consulted the post
    # timestamp = models.DateTimeField(auto_now=True)  # Stores last interaction time

    class Meta:
        unique_together = ('student', 'post')  # One record per student-post pair

    def __str__(self):
        return f"{self.student.username} -> {self.post.title} | Like: {self.liked} | Saved: {self.saved_to_agenda}"
    






# # Views
# from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated


# class PostViewSet(viewsets.ModelViewSet):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#     permission_classes = [IsAuthenticated]


# class ResourceViewSet(viewsets.ModelViewSet):
#     queryset = Resource.objects.all()
#     serializer_class = ResourceSerializer
#     permission_classes = [IsAuthenticated]


# class ClubViewSet(viewsets.ModelViewSet):
#     queryset = Club.objects.all()
#     serializer_class = ClubSerializer
#     permission_classes = [IsAuthenticated]


# class ProfileViewSet(viewsets.ModelViewSet):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
#     permission_classes = [IsAuthenticated]


# # URLs
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r"posts", PostViewSet)
# router.register(r"resources", ResourceViewSet)
# router.register(r"clubs", ClubViewSet)
# router.register(r"profiles", ProfileViewSet)

# urlpatterns = [
#     path("api/", include(router.urls)),
# ]
