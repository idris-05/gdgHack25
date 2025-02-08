import json 
from rest_framework import serializers
from shared.models import Resource , Tag, TagChoices
from shared.views import upload_file  # Import your existing upload function
from shared.serializers import TagSerializer , ClubSerializer

class ResourceCreateSerializer(serializers.ModelSerializer):
    tags = serializers.MultipleChoiceField(choices=TagChoices.choices, write_only=True)  # Directly handle lists
    file = serializers.FileField(write_only=True)  # Expecting a file from the user

    class Meta:
        model = Resource
        fields = ["name", "description", "tags", "file", "level"]

    def create(self, validated_data):
        tags_data = validated_data.pop("tags", [])
        uploaded_file = validated_data.pop("file", None)

        # Handle file upload (assuming upload_file returns a file URL)
        if not uploaded_file:
            raise serializers.ValidationError({"file": "No file uploaded"})
        
        request = self.context.get("request")
        response = upload_file(request)
        file_url = response.get("file_url") if isinstance(response, dict) else json.loads(response.content.decode()).get("file_url")

        if not file_url:
            raise serializers.ValidationError({"file": "File upload failed"})

        # Validate tags
        tag_instances = [Tag.objects.get_or_create(name=tag_name)[0] for tag_name in tags_data]
        
        # Create resource
        user = self.context["request"].user
        resource = Resource.objects.create(club=user.club ,file_url=file_url, **validated_data)
        resource.tags.set(tag_instances)  # Assign tags

        return resource
    

class ResourceListSerializer(serializers.ModelSerializer):
    # tags = serializers.SerializerMethodField()  # Custom field to return tag names
    tags = TagSerializer(many=True)  # Use TagSerializer to return tag details
    club = ClubSerializer()  # Use ClubSerializer to return club details
    
    class Meta:
        model = Resource
        fields = ["id", "name", "description", "tags", "club", "file_url", "level", "created_at"]

    # def get_tags(self, obj):
    #     return [tag.name for tag in obj.tags.all()]  # Return list of tag names