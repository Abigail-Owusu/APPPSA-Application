from django.db import models

# Create your models here.
from accounts.models import CustomUser


class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sender', blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    initiative = models.ForeignKey('Intiatives', on_delete=models.CASCADE, related_name='initiative', blank=False, null=False) 
    timestamp = models.DateTimeField(auto_now_add=True)
    momo_number = models.CharField( max_length=20, null=False, blank=False, default=None)

    def __str__(self):
        return f"{self.sender} - {self.timestamp}"
    
class Intiatives(models.Model):
    intiative_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField()
    total_target_amount = models.DecimalField(max_digits=10, decimal_places=2)
    deadline = models.DateField(default=None)
