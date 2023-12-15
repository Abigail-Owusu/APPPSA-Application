from rest_framework import serializers
from .models import Payment, Initiatives





class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class InitiativesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Initiatives
        fields = '__all__'