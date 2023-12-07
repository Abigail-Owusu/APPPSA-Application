from django.urls import path
from .views import create_post, comment_on_post, like_post, get_number_of_likes, get_posts, get_post_by_user

urlpatterns = [
    path('posts/create/', create_post, name='create-post'),
    path('posts/comment/', comment_on_post, name='comment-on-post'),
    path('posts/like/', like_post, name='like-post'),
    path('posts/likes', get_number_of_likes, name='get-number-of-likes'),
    path('posts/', get_posts, name='get-posts'),
    path('posts/user', get_post_by_user, name='get-post-by-user'),
]