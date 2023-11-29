from django.db import models
import uuid
# Create your models here.
from django.db import models
from accounts.models import CustomUser

class Post(models.Model):
    post_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    title = models.CharField(max_length=255, null=False, blank=False)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content = models.TextField(null=False, blank=False)
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    caption = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        # Delete old image when updating the post
        if self.pk:
            old_post = Post.objects.get(pk=self.pk)
            if self.image and old_post.image != self.image:
                old_post.image.delete(save=False)

        super(Post, self).save(*args, **kwargs)

class Comment(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    
    


