from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer, CommentSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        authenticated_user = request.user.email
        # Slice the email to get the username
        auth_user_sliced = authenticated_user.find('@')
        return Response({'message': f'{authenticated_user[:auth_user_sliced]} made a post successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_on_post(request):
    serializer = CommentSerializer(data=request.data)
    authenticated_user = request.user.email
    auth_user_sliced = authenticated_user.find('@')
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response({'message': f'{authenticated_user[:auth_user_sliced]} commented successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)