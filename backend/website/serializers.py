from rest_framework import serializers




class AdvertisementSerializer(serializers.Serializer):
  id = serializers.IntegerField()
  name = serializers.CharField(max_length=255)
  description = serializers.CharField(max_length=1500)
  adv_type = serializers.CharField(max_length=255)
  accepted_animals = serializers.ListField(child=serializers.CharField(max_length=255))
  pros = serializers.ListField(child=serializers.CharField(max_length=255))
  price_per_day = serializers.IntegerField()
  phone = serializers.CharField(max_length=255)
  city = serializers.CharField(max_length=255)
  street = serializers.CharField(max_length=255)
  post_code = serializers.CharField(max_length=255)


class AdvertisementImgSerializer(serializers.Serializer):
  advertisement_id = serializers.IntegerField()
  image = serializers.ImageField()
