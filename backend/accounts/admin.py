from django.contrib import admin
from .models import RankingImage

class ImageAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

admin.site.register(RankingImage, ImageAdmin)