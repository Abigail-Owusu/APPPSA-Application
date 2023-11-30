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

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def like_post(request):
    post_id = request.data.get('post_id')
    post = Post.objects.get(pk=post_id)
    post_author = post.user.email

    # Check if the user has already liked the post
    if request.user in post.likes.all():
        post.likes.remove(request.user)
        return Response({'message': f'You unliked {post_author}\'s post'}, status=status.HTTP_200_OK)
    post.likes.add(request.user)
    return Response({'message': f'You liked {post_author}\'s post successfully'}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_number_of_likes(request):
    post_id = request.query_params.get('post_id')
    post = Post.objects.get(pk=post_id)
    return Response({'number_of_likes': post.likes.count()}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_posts(request):
    # Retrieve posts ordered by timestamp in descending order (most recent first)
    posts = Post.objects.all().order_by('-timestamp')
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_post_by_user(request):
    user = request.query_params.get('user')
    post = Post.objects.filter(user=user).order_by('timestamp')
    serializer = PostSerializer(post, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


