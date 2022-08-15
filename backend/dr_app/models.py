from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Activity(models.Model):
    name = models.CharField(max_length=500, unique=True, blank=False)
    description = models.CharField(max_length=1000, unique=True, blank=False)
    keywords = models.CharField(max_length=255, unique=True, blank=False)

    def __str__(self):
        return self.name


class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
