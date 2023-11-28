
from django.urls import path
from .views import register_user, user_login, user_logout, verify_email, view_profile, edit_profile

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
urlpatterns = [
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register_user, name='register'),
    path('verify', verify_email, name='verify_email'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('profile', view_profile, name='user-profile'),
    path('profile/edit', edit_profile, name='edit-user-profile'),

]
