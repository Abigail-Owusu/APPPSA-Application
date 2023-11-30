from django.db import models
import uuid
# Create your models here.
from django.db import models
from accounts.models import CustomUser

class Post(models.Model):
    post_id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    title = models.CharField(max_length=255, null=False, blank=False)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, blank=True)
    content = models.TextField(null=False, blank=False)
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
  

class Comment(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)