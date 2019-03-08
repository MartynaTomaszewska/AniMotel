from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Advertisement, AdvertisementImg
from .serializers import AdvertisementSerializer, AdvertisementImgSerializer

# Create your views here.

class AdvertisementView(APIView):
  def get(self, request):
    advertisements = Advertisement.objects.all()
    advertisementsImgs = AdvertisementImg.objects.all()
    advertisementsSerializer = AdvertisementSerializer(advertisements, many=True)

    response = { 'advertisements': advertisementsSerializer.data }
    for adv in response['advertisements']:
      images = Advertisement.objects.get(pk=adv['id']).images
      imagesSerializer = AdvertisementImgSerializer(images, many=True)
      adv['images'] = imagesSerializer.data

    return Response(response)

