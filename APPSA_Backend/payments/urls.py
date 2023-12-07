from django.urls import path
from .views import send_payment,create_initiative, get_initiatives, get_currentdonations_in_percentage

urlpatterns = [
    path('send_payment/', send_payment, name='send-payment'),
    path('create_initiative/', create_initiative, name='create-initiative'),
    path('get_initiatives', get_initiatives, name='get-initiatives'),
    path('get_currentdonations_in_percentage', get_currentdonations_in_percentage, name='get-currentdonations-in-percentage'),

]