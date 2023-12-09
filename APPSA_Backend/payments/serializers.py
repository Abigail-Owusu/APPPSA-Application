from rest_framework import serializers
from .models import Payment, Intiatives





class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class IntiativesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intiatives
        fields = '__all__'