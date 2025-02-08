
from django.core.management.base import BaseCommand
from shared.models import Tag

#command to generate tags in the database

class Command(BaseCommand):
    help = "Create 100 Tag instances"

    def handle(self, *args, **kwargs):
        tag_instances = [Tag(name=f"Choice {i}") for i in range(100)]
        Tag.objects.bulk_create(tag_instances, ignore_conflicts=True)  # Avoid duplicate errors
        self.stdout.write(self.style.SUCCESS("✅ Successfully created 100 tags!"))
