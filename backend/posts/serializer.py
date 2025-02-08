from rest_framework import serializers
from shared.models import Post, Tag, Project, Event, Club  # Adjust import if needed

class PostSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(
        queryset=Tag.objects.all(), many=True, slug_field="name"
    )
    post_type = serializers.ChoiceField(choices=["project", "event"], write_only=True)
    github_link = serializers.URLField(required=False, allow_null=True)  # Optional field

    class Meta:
        model = Post
        fields = [
            "id", "title", "description", "date_debut", "image_url",
            "tags", "created_at", "post_type", "github_link"
        ]
        read_only_fields = ["id", "created_at", "date_debut"]

    def create(self, validated_data):
        request = self.context.get("request")
        if not request or not hasattr(request.user, "club"):
            raise serializers.ValidationError("User must be authenticated as a club.")

        club = request.user.club  # Récupérer le club connecté
        post_type = validated_data.pop("post_type")
        tags = validated_data.pop("tags", [])
        github_link = validated_data.pop("github_link", None)  # Extract github_link safely

        if post_type == "project":
            post_instance = Project.objects.create(**validated_data, github_link=github_link, author=club)
        elif post_type == "event":
            if github_link:
                raise serializers.ValidationError({"github_link": "This field is only allowed for projects."})
            post_instance = Event.objects.create(**validated_data, author=club)
        else:
            raise serializers.ValidationError({"post_type": "Invalid post type."})

        post_instance.tags.set(tags)  # Associer les tags
        return post_instance

#
    def get_post_type(self, obj):
        """Determine if the post is an event or project based on model type."""
        if isinstance(obj, Project):
            return "project"
        elif isinstance(obj, Event):
            return "event"
