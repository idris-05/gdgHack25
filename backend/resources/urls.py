from django.urls import path
from .views import ResourceCreateView , ResourceListView , ResourceDetailView

urlpatterns = [
    path('', ResourceCreateView.as_view(), name='resource-create'),
    path('all/', ResourceListView.as_view(), name='resource-list'),
    path('<int:pk>/', ResourceDetailView.as_view(), name='resource-detail'),
]