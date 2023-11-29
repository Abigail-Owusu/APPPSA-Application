

from base64 import urlsafe_b64decode
from django.utils.http import urlsafe_base64_decode
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from .models import CustomUser
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer, UserProfileUpdateSerializer

from Helper_Functions.account_helpers import send_verification_email
from django.contrib.auth.tokens import default_token_generator
from django.shortcuts import render
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode

@api_view(['GET'])
def verify_email(request):
    try:
        user_idb64 = request.query_params.get('uid')
        uid = force_str(urlsafe_base64_decode(user_idb64))
        user = CustomUser.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
        user = None
    
    if user is not None:
        user.email_verified = True
        user.save()
        return render(request, 'email_verified.html')
    else:
        
        return render(request, 'email_verification_failed.html')
    
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save(email_verified=False)  # Set email_verified to False initially

            # Generate a verification token for the user
            verification_token = default_token_generator.make_token(user)

            # Send the verification email
            send_verification_email(user, verification_token)

            return Response({'message': 'Sign up successful. Verification email sent.', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        print(email)
        password = request.data.get('password')

        # user = authenticate(request, email=email, password=password)
        user = CustomUser.objects.filter(email=email).first()
    
        if user is None:
            return Response({'error': 'User does not exist!!'}, status=status.HTTP_404_NOT_FOUND)

        if user.check_password(password):
            print("User is authenticated")
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'message': 'Login successful','token': token.key}, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def view_profile(request):
    """
    View the profile of a user
    Args:
        request:
        email: The email of the user whose profile is to be viewed
    Returns:
        The profile of the user
    """
    if request.method == 'GET':
        email = request.query_params.get('email')
        user = CustomUser.objects.filter(email=email).first()
        if user is None:
            return Response({'error': 'User does not exist!!'}, status=status.HTTP_404_NOT_FOUND)
        serializer = UserSerializer(user)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)
    
@api_view(['PATCH'])
# @permission_classes([IsAuthenticated])
def update_profile(request):
    """
    Update the profile of a user
    Args:
        request:
        email: The email of the user whose profile is to be updated
    Returns:
        The updated profile of the user
    """
@api_view(['PATCH'])
# @permission_classes([IsAuthenticated])
def edit_profile(request):
    # Retrieve the authenticated user
    authenticated_user = request.user

    # Retrieve the email from the URL query parameters
    email = request.query_params.get('email')

    # Ensure that the authenticated user is editing their own profile
    if "abigailowusu296@gmail.com" != email:
        return Response({'error': 'Permission denied. You can only edit your own profile.'}, status=status.HTTP_403_FORBIDDEN)

    # Retrieve the user to be edited
    user_to_edit = CustomUser.objects.filter(email=email).first()

    # Check if the user exists
    if user_to_edit is None:
        return Response({'error': 'User does not exist!!'}, status=status.HTTP_404_NOT_FOUND)

    # Serialize and update the user's profile
    serializer = UserProfileUpdateSerializer(user_to_edit, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Profile updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)