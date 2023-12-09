from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        first_name = request.user.first_name
        last_name = request.user.last_name
        return Response({'message': f'{first_name} {last_name} made a post successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_on_post(request):
    serializer = CommentSerializer(data=request.data)
    first_name = request.user.first_name
    last_name = request.user.last_name
    post = Post.objects.get(pk=request.data.get('post_id'))
    if serializer.is_valid():
        serializer.save(user=request.user)
        # Comment.objects.create(user=request.user, post_id=post, text=request.data.get('text'))
        return Response({'message': f'{first_name} {last_name} commented successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
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
def get_number_of_comments(request):
    post_id = request.query_params.get('post_id')
    comment = Comment.objects.filter(post_id=post_id)
    return Response({'number_of_comments': comment.count()}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_posts(request):
    # Retrieve posts ordered by timestamp in descending order (most recent first)
    response = []
    posts = Post.objects.all().order_by('-timestamp')
    for post in posts:
        serializer = PostSerializer(post).data
        post_comments = Comment.objects.filter(post_id=post.post_id).order_by('-timestamp')
        comments = []
        for comment in post_comments:
            comments.append(comment.text)
        serializer['comments'] = comments
        response.append(serializer)

    return Response(response, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_post_by_user(request):
    user = request.query_params.get('user')
    response = []
    posts = Post.objects.filter(user=user).order_by('-timestamp')
    for post in posts:
        serializer = PostSerializer(post).data
        post_comments = Comment.objects.filter(post_id=post.post_id).order_by('-timestamp')
        comments = []
        for comment in post_comments:
            comments.append(comment.text)
        serializer['comments'] = comments

        response.append(serializer)
    return Response(response, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_post_by_id(request):
    post_id = request.query_params.get('post_id')
    post = Post.objects.get(pk=post_id)
    serializer = PostSerializer(post).data
    comments = []
    post_comments = Comment.objects.filter(post_id=post.post_id).order_by('-timestamp')
    for comment in post_comments:
        comments.append(comment.text)
    serializer['comments'] = comments
    return Response(serializer, status=status.HTTP_200_OK)