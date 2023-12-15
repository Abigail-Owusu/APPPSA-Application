from django.urls import path
from .views import create_post, comment_on_post, like_post, get_number_of_likes, get_posts, get_post_by_user, get_number_of_comments, get_post_by_id

urlpatterns = [
    path('posts/create/', create_post, name='create-post'),
    path('posts/comment/', comment_on_post, name='comment-on-post'),
    path('posts/like/', like_post, name='like-post'),
    path('posts/likes', get_number_of_likes, name='get-number-of-likes'),
    path('posts/', get_posts, name='get-posts'),
    path('posts/user', get_post_by_user, name='get-post-by-user'),
    path('posts/comments', get_number_of_comments, name='get-number-of-comments'),
    path('posts/post', get_post_by_id, name='get-post-by-id')

]