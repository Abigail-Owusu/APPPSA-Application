
from django.urls import path
from .views import register_user, user_login, user_logout, verify_email

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
urlpatterns = [
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register_user, name='register'),
    path('verify/<str:uidb64>/<str:token>/', verify_email, name='verify_email'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
]
