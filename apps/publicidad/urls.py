
from .views import  ArticuloViewSet
from rest_framework.routers import DefaultRouter 

router = DefaultRouter()
router.register(r'pqrs', ArticuloViewSet)

urlpatterns = router.urls
