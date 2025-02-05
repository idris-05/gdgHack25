from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token 
from .views import logout_view , register_view

urlpatterns = [
    path('register/', register_view),
    path('login/', obtain_auth_token),
    path('logout/', logout_view),
]
