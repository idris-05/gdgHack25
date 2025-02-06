from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken

from rest_framework import generics
from .serializers import RegisterSerializer , UserSerializer
from rest_framework.authtoken.models import Token

class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'user' : UserSerializer(user).data,
            'token': token.key
            })

login_View = LoginView.as_view()
    
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    
    def post(self, request):
        try:
            token = request.auth
            token.delete()
            return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

logout_view = LogoutView.as_view()




class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = [] #! Remove authentication
    permission_classes = []  #! Remove permissions
    
    def post(self, request, *args, **kwargs):
        # Use the default behavior of CreateAPIView to handle registration
        serializer = RegisterSerializer(data=request.data)
        
        if serializer.is_valid():
            # Create the user and save
            user = serializer.save()  # Use the save method to create the user
            
            # Create a token for the user
            token, created = Token.objects.get_or_create(user=user)
            
            # Prepare the response data with token and user details
            return Response({
                'user': serializer.data,  # user data
                'token': token.key  # generated token
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

register_view = RegisterView.as_view()