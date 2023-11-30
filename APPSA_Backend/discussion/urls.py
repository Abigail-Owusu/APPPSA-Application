from django.urls import path
from .views import create_post, comment_on_post

urlpatterns = [
    path('posts/create/', create_post, name='create-post'),
    path('posts/comment/', comment_on_post, name='comment-on-post'),
]