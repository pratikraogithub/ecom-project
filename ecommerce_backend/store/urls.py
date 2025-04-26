from django.contrib import admin
from django.urls import include, path

from .views import *

urlpatterns = [
    path('', index, name='index'),  # Example view
    path('api/products/', product_list, name='product-list'),
    path('api/products/<int:pk>/', product_detail, name='product-detail'),
    path('api/register/', register_user, name='register'),
    path('api/login/', login_user, name='login'),

    # Add your app's URLs here,
]