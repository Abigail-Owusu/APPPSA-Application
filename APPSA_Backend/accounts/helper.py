from .models import CustomUser

#getting the user email
def get_user(email):
    try:
        user = CustomUser.objects.get(email=email)
    except CustomUser.DoesNotExist:
        return None

    return user
