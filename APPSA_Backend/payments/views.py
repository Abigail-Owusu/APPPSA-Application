from django.shortcuts import render
import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Payment, Intiatives
from .serializers import PaymentSerializer, IntiativesSerializer
from rest_framework import status
from APPSA_Backend import settings
from django.db.models import Sum


# Create your views here.

@permission_classes([IsAuthenticated])

def get_network_provider(phone_number):
    """
    Get the network provider of a phone number
    """
    if phone_number.startswith('024') or phone_number.startswith('054') or phone_number.startswith('055') or phone_number.startswith('059'):
        return 'mtn'
    elif phone_number.startswith('020') or phone_number.startswith('050'):
        return 'voda'
    elif phone_number.startswith('026') or phone_number.startswith('056') or phone_number.startswith('027') or phone_number.startswith('057'):
        return 'tgo'

    else:
        return 'UNKNOWN'

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_payment(request):
    """
    Send a payment to another user
    """
    headers = {
        'Authorization': f'Bearer {settings.PAYSTACK_SECRET_KEY}',
        'Content-Type': 'application/json',
    }


    payload = {
            'email': request.user.email,
            'amount': request.data.get("amount") * 100, 
            'currency': settings.PAYMENT_CURRENCY,
            'mobile_money': {
                'phone': request.data.get('momo_number'),
                'provider': get_network_provider(phone_number=request.data.get('momo_number')),
            }
        }
        
    response = requests.post(settings.PAYSTACK_INITIALIZE_URL, json=payload, headers=headers)
    response.raise_for_status() # Ensure we notice bad responses
    paystack_response = response.json() # Get the JSON-encoded content from response
    
    # Check the status in the Paystack API response
    if paystack_response['status'] is True:
        
        if 'data' in paystack_response and 'authorization_url' in paystack_response['data']:
            
            Payment.objects.create(
                sender=request.user,
                amount=request.data.get('amount'),
                momo_number=request.data.get('momo_number'),
                initiative=Intiatives.objects.get(intiative_id=request.data.get('initiative'))
            )
            
            # Payment initiation successful
            return Response({'message': 'Payment initiation successful', 'data': paystack_response['data']}, status=status.HTTP_200_OK)
        
    # Payment initiation failed
    return Response({'message': 'Payment initiation failed', 'paystack_response': paystack_response}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_initiative(request):
    """
    Create an initiative
    """
    serializer = IntiativesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Initiative created successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_initiatives(request):
    """
    Get all initiatives
    """
    initiatives = Intiatives.objects.all()
    serializer = IntiativesSerializer(initiatives, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_currentdonations_in_percentage(request):
    """
    Get the current donations in percentage
    """
    initiative_id = request.query_params.get('initiative_id')
    target_amount = Intiatives.objects.get(intiative_id=initiative_id).total_target_amount
    initative = Intiatives.objects.get(intiative_id=initiative_id)
    current_amount_dict = Payment.objects.filter(initiative=initative).aggregate(Sum('amount')) # Get the sum of all payments for this initiative in a dictionary
    current_amount = current_amount_dict.get('amount__sum', 0)# Get the sum of all payments for this initiative in a dictionary
    return Response({'percentage': (current_amount/target_amount)*100}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_initiative(request):
    """
    Delete an initiative
    """
    initiative_id = request.query_params.get('initiative_id')
    Intiatives.objects.get(intiative_id=initiative_id).delete()
    return Response({'message': 'Initiative deleted successfully'}, status=status.HTTP_200_OK)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_initiative(request):
    """
    Update an initiative
    """
    initiative_id = request.query_params.get('initiative_id')
    initiative = Intiatives.objects.get(intiative_id=initiative_id)
    serializer = IntiativesSerializer(initiative, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Initiative updated successfully', 'data': serializer.data}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

    