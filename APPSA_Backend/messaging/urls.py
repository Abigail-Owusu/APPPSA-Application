from django.urls import path
from .views import send_message, get_messages, delete_message
urlpatterns = [
    path('send/', send_message, name='send-message'),
    path('messages', get_messages, name='get-messages'),
    path('delete_message', delete_message, name='delete-message'),

]