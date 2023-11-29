from rest_framework import serializers
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import CustomUser



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['title', 'first_name', 'last_name', 'nationality', 'postal_code', 'city', 'district',
                  'country', 'profession', 'current_organization', 'dob', 'tel_code', 'telephone',
                  'email', 'password', 'first_name_next_of_kin', 'last_name_next_of_kin', 'tel_next_of_kin',
                  'year_group1', 'chapter1', 'house1']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            title=validated_data['title'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            nationality=validated_data['nationality'],
            postal_code=validated_data['postal_code'],
            city=validated_data['city'],
            district=validated_data['district'],
            country=validated_data['country'],
            profession=validated_data['profession'],
            current_organization=validated_data['current_organization'],
            dob=validated_data['dob'],
            tel_code=validated_data['tel_code'],
            telephone=validated_data['telephone'],
            email=validated_data['email'],
            first_name_next_of_kin=validated_data['first_name_next_of_kin'],
            last_name_next_of_kin=validated_data['last_name_next_of_kin'],
            tel_next_of_kin=validated_data['tel_next_of_kin'],
            year_group1=validated_data['year_group1'],
            chapter1=validated_data['chapter1'],
            house1=validated_data['house1']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

# class LoginSerializer(TokenObtainPairSerializer):
#     email = serializers.EmailField(
#         max_length=200,
#         min_length=4, 
#         required=True, 
#         help_text='Required. 4-200 characters. Must be a valid email address.'
#         )
    
#     password = serializers.CharField(
#         label=("Password"),
#         trim_whitespace=False,
#         required=True,
#         help_text='Must contain at least one letter and one number.'
#         )
#     # token = serializers.SerializerMethodField("get_token")
#     class Meta:
#         model = CustomUser
#         fields = ['email', 'password']
#         extra_kwargs = {
#             'password': {'write_only': True},
#             'access_token': {'read_only': True},
#             'refresh_token': {'read_only': True},
#             }
class UserProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'other_names', 'middle_name', 'maiden_name', 
                  'nationality', 'postal_code', 'zip_code', 'city', 'district', 'country', 
                  'profession', 'current_organization', 'dob', 'tel_code', 'telephone', 
                  'additional_tel', 'first_name_next_of_kin', 'last_name_next_of_kin', 
                  'tel_next_of_kin', 'year_group1', 'year_group2', 'chapter1', 'chapter2', 
                  'chapter3', 'house1', 'house2']