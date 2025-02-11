from rest_framework import permissions
from .models import Student , Club

class IsStudent(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        try:
            request.user.student
            return True
        except Student.DoesNotExist:
            return False

class IsClub(permissions.BasePermission):
    def has_permission(self, request,view):
        if not request.user.is_authenticated:
            return False
        try:
            request.user.club
            return True
        except Club.DoesNotExist:
            return False