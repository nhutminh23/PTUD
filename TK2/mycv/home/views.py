from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def page1(request):
    return render(request, 'cv1.html')

def page2(request):
    return render(request, 'cv2.html')
