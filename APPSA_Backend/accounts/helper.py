from .models import CustomUser

#getting the user email
def get_user(email):
    try:
        user = CustomUser.objects.filter(email=email).first()
    except CustomUser.DoesNotExist:
        return None

    return user
