from django.urls import path
from .views import create_post, update_post, get_post, delete_post, list_posts

urlpatterns = [
    path('posts/create/', create_post, name='create-post'),
]