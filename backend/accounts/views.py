from .models import RankingImage
from django.shortcuts import render
from django.http import Http404

def images(request, image_id):
    image = RankingImage.objects.get(pk=image_id)
    if image is not None:
        return render(request, 'images/images.html', {'image': image})
    else:
        raise Http404('does not exist')