from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Message
from .serializers import MessageSerializer
from django.db.models import Q
from django.db import models
from rest_framework.exceptions import PermissionDenied

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_message(request):
    """
    Send a message to another user
    """
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(sender=request.user)
        return Response({'message': 'Message sent successfully', 'data': serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_messages(request):
    """
    Get all messages between the authenticated user and another user
    """
    sender_id = request.user.email
    receiver_id = request.query_params.get('receiver_id')
    messages = Message.objects.filter(
        (models.Q(sender_id=sender_id) & models.Q(receiver_id=receiver_id)) |
        (models.Q(sender_id=receiver_id) & models.Q(receiver_id=sender_id))
    ).order_by('-timestamp')
    serializer = MessageSerializer(messages, many=True)
    Message.mark_as_read(sender_id, receiver_id)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_message(request):
    """
    Delete a message
    """
    message_id = request.query_params.get('message_id')
    try:
        message = Message.objects.get(pk=message_id)
    except Message.DoesNotExist:
        return Response({'error': 'Message not found'}, status=status.HTTP_404_NOT_FOUND)

    # Check if the authenticated user is the sender of the message
    if request.user.email != message.sender.email:
        raise PermissionDenied("You don't have permission to delete this message")

    message.delete()
    return Response({'message': 'Message deleted successfully'}, status=status.HTTP_200_OK)
