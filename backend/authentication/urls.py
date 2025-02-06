from django.urls import path
from .views import login_View, logout_view , register_view

urlpatterns = [
    path('register/', register_view),
    path('login/', login_View),
    path('logout/', logout_view),
]
