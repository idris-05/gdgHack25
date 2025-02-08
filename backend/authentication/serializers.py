from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id', 'username', 'user_type']
        
    def get_user_type(self, obj):
        if hasattr(obj, 'club'):  # Check if user has a related Club
            return 'club'
        elif hasattr(obj, 'student'):  # Check if user has a related Student
            return 'student'
        return 'unknown'  # If neither, return 'unknown'
        
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Password is write-only

    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        
        return user