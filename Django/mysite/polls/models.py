import datetime

from django.db import models
from django.utils import timezone

# Create your models here.
class Question(models.Model):

    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now

    question_text = models.CharField(max_length=200)
    pub_date  = models.DateTimeField('date published')

    was_published_recently.admin_order_field = 'pub_date'
    was_published_recently.boolean = True
    was_published_recently.short_description = 'Published recently?'

class Choice(models.Model):

    def __str__(self):
        return self.choice_text

    # when a `Question` is deleted, the corresponding records here will be deleted as wells
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    # `choice_text` is a text of length at most 200
    choice_text = models.CharField(max_length=200)
    # default value for votes is 0
    votes = models.IntegerField(default=0)