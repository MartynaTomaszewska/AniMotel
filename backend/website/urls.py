from django.urls import path
from .views import AdvertisementView

urlpatterns = [
    path('advertisements/', AdvertisementView.as_view()),
]