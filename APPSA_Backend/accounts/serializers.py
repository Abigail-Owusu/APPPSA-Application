from rest_framework import serializers
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CustomUser



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'other_names', 'middle_name', 'maiden_name', 
                  'nationality', 'postal_code', 'zip_code', 'city', 'district', 'country', 
                  'profession', 'profile_picture', 'current_organization', 'dob', 'tel_code', 'telephone', 
                  'additional_tel', 'first_name_next_of_kin', 'last_name_next_of_kin', 
                  'tel_next_of_kin', 'year_group1', 'year_group2', 'chapter1', 'chapter2', 
                  'chapter3', 'house1', 'house2']