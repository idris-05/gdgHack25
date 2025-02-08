from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect, csrf_exempt
import cloudinary.uploader

@csrf_exempt
# @csrf_protect
def upload_file(request):
    #! in the request , you should spesefy the file key as 'file', you can use body -> form-data
    if request.method == 'POST' and request.FILES.get('file'):
        file = request.FILES['file']
        
        # Upload to Cloudinary
        response = cloudinary.uploader.upload(file, resource_type="auto")  
        
        return JsonResponse({
            'file_url': response['secure_url'],
            'public_id': response['public_id'], # we can remove this returned value as it is not needed
            })
    
    return JsonResponse({'error': 'No file uploaded'}, status=400)
