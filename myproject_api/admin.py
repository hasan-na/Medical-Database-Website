from django.contrib import admin
from .models import Patient
from .models import Patient_Health_history
from .models import Doctor
from .models import Diagnosis
from .models import Nurse
from .models import Medical_Facility
from .models import Insurence_Company
from .models import Ambulance
from .models import Airport
from .models import Medical_Exam
from .models import Lab


# Register your models here.
admin.site.register(Patient)
admin.site.register(Patient_Health_history)
admin.site.register(Doctor)
admin.site.register(Diagnosis)
admin.site.register(Nurse)
admin.site.register(Medical_Facility)
admin.site.register(Insurence_Company)
admin.site.register(Ambulance)
admin.site.register(Airport)
admin.site.register(Medical_Exam)
admin.site.register(Lab)
