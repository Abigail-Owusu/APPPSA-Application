
# from django.contrib.auth.models import AbstractUser
# from django.db import models


# class CustomUser(AbstractUser):
#     email = models.EmailField(unique=True)

#     # Add custom fields here, if needed

#     def __str__(self):
#         return self.username

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, first_name, last_name, email, password, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        # ensure that the email is case-insensitive
        email = self.normalize_email(email)
        user = self.model(first_name=first_name, last_name=last_name, 
                          email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self.create_user(first_name, last_name, email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    title = models.CharField(max_length=100, null=False, blank=False)
    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name = models.CharField(max_length=100, null=False, blank=False)
    other_names = models.CharField(max_length=200, null=True, blank=True)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    maiden_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=200, null=False, blank=False, unique=True)
    password = models.CharField(max_length=200, null=False, blank=False)
    nationality = models.CharField(max_length=200, null=False, blank=False)
    postal_code = models.CharField(max_length=20, null=False, blank=False)
    zip_code = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=100, null=False, blank=False)
    district = models.CharField(max_length=100, null=False, blank=False)
    country = models.CharField(max_length=150, null=False, blank=False)
    profession = models.CharField(max_length=200, null=False, blank=False)
    current_organization = models.CharField(max_length=200, null=False, blank=False)
    dob = models.DateField(null=False, blank=False)
    tel_code = models.CharField(max_length=20, null=False, blank=False)
    telephone = models.CharField( max_length=20, null=False, blank=False, unique=True)
    additional_tel = models.CharField(
        max_length=20, null=True, blank=True, unique=True)
    first_name_next_of_kin = models.CharField(
        max_length=200, null=False, blank=False)
    last_name_next_of_kin = models.CharField(
        max_length=200, null=False, blank=False)
    tel_next_of_kin = models.CharField(max_length=20, null=False, blank=False)
    year_group1 = models.IntegerField(null=False, blank=False)
    year_group2 = models.IntegerField(null=True, blank=True)
    chapter1 = models.CharField(max_length=200, null=False, blank=False)
    chapter2 = models.CharField(max_length=200, null=True, blank=True)
    chapter3 = models.CharField(max_length=200, null=True, blank=True)
    house1 = models.CharField(max_length=200, null=False, blank=False)
    house2 = models.CharField(max_length=200, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['title', 'first_name', 'last_name', 'nationality', 'postal_code', 'city', 'district',
                       'country', 'profession', 'current_organization', 'dob', 'tel_code', 'telephone',
                        'first_name_next_of_kin', 'last_name_next_of_kin', 'tel_next_of_kin',
                       'year_group1', 'chapter1', 'house1']

    def __str__(self):
        return self.email
