from django.db import models



class Task(models.Model):
    title = models.CharField(max_length=200)  # ✅ Required field
    description = models.TextField(blank=True)  # ✅ Optional
    completed = models.BooleanField(default=False)  # ✅ Default

    def __str__(self):
        return self.title
