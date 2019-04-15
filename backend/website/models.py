from django import forms
from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

ADV_TYPES = (
  ('hotel', 'hotel'),
  ('private', 'private')
)

ACCEPTED_ANIMALS = (
  ('dog', 'dog'),
  ('cat', 'cat'),
  ('horse', 'horse'),
  ('bird', 'bird'),
  ('reptile', 'reptile'),
)

PROS = (
  ('1', 'blisko miasta'),
  ('2', 'z dala od miasta'),
  ('3', 'w centrum miasta')
)

CHARACTERS = (
  ('mild', 'mild'),
  ('aggressive', 'aggressive'),
  ('lazy', 'lazy'),
  ('unstable', 'unstable'),
)

SIZES = (
  ('small', 'small'),
  ('medium', 'medium'),
  ('pig', 'pig'),
)

class ChoiceArrayField(ArrayField):
  def formfield(self, **kwargs):
    defaults = {
      'form_class': forms.MultipleChoiceField,
      'choices': self.base_field.choices,
    }
    defaults.update(kwargs)
    return super(ArrayField, self).formfield(**defaults)


class Advertisement(models.Model):
  name = models.CharField(max_length=255, blank=False)
  description = models.CharField(max_length=1500, blank=False)
  adv_type = models.CharField(max_length=255, choices=ADV_TYPES, blank=False)
  accepted_animals = ChoiceArrayField(base_field=models.CharField(max_length=255, choices=ACCEPTED_ANIMALS, blank=False), default=list)
  pros = ChoiceArrayField(base_field=models.CharField(max_length=255, choices=PROS, blank=False), default=list)
  price_per_day = models.IntegerField(null=False, default=0)
  phone = models.CharField(max_length=255, blank=False)
  city = models.CharField(max_length=255, blank=False)
  street = models.CharField(max_length=255, blank=False)
  post_code = models.CharField(max_length=255, blank=False)


class AdvertisementImg(models.Model):
  advertisement = models.ForeignKey('Advertisement', related_name='images', on_delete=models.CASCADE)
  image = models.ImageField(null=True, blank=True, upload_to='advertisements')


class User(models.Model):
  name = models.CharField(max_length=255, blank=False)
  email = models.EmailField(max_length=70, blank=False)
  password = models.CharField(max_length=50)
  phone = models.CharField(max_length=255, blank=False)
  city = models.CharField(max_length=255, blank=False)
  street = models.CharField(max_length=255, blank=False)
  post_code = models.CharField(max_length=255, blank=False)


class Animal(models.Model):
  user = models.ForeignKey('User', related_name='animals', on_delete=models.CASCADE)
  name = models.CharField(max_length=255, blank=False)
  kind = ChoiceArrayField(base_field=models.CharField(max_length=255, choices=ACCEPTED_ANIMALS, blank=False), default=list)
  race = models.CharField(max_length=255, blank=False)
  age = models.IntegerField(null=False, default=0)
  weight = models.IntegerField(null=False, default=0)
  size = ChoiceArrayField(base_field=models.CharField(max_length=255, choices=SIZES, blank=False), default=list)
  diseases = models.CharField(max_length=500, blank=False)
  character = ChoiceArrayField(base_field=models.CharField(max_length=255, choices=CHARACTERS, blank=False), default=list)
  allergies = models.CharField(max_length=500, blank=False)
  favorite_food = models.CharField(max_length=500, blank=False)

  
  

  

