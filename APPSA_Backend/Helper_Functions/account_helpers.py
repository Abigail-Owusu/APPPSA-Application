# views.py
from django.core.mail import send_mail
from django.conf import settings
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes


def send_verification_email(user, verification_token):
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    verification_link = f'{settings.BASE_URL}/verify/{uid}/{verification_token}/'

    subject = 'Verify your email address'
    message = f'Click the following link to verify your email: {verification_link}'
    from_email = settings.DEFAULT_FROM_EMAIL
    recipient_list = [user.email]
    send_mail(subject, message, from_email, recipient_list)
