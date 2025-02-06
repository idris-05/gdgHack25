from django.contrib import admin
from .models import TestEntry

admin.site.register(TestEntry)


#! Use this script to manually add all models of an app to the admin site
# app = apps.get_app_config('app name')

# for model in app.get_models():
#     try:
#         admin.site.register(model)
#     except admin.sites.AlreadyRegistered:
#        pass

