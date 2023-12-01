from django.db import models
from accounts.models import CustomUser

# Create your models here.
class Message(models.Model):
    message_id = models.AutoField(primary_key=True)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sender', blank=True)
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='receiver', blank=False, null=False)
    text = models.TextField()
    image = models.ImageField(upload_to='message_images/', null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.sender} to {self.receiver} - {self.timestamp}"
    
    @classmethod
    def mark_as_read(cls, sender, receiver):
        """
        Mark all messages between the sender and receiver as read
        """
        cls.objects.filter(sender=sender, receiver=receiver).update(is_read=True)
