# Generated by Django 4.2.6 on 2023-12-09 22:15

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("discussion", "0007_alter_post_comments"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="post",
            name="comments",
        ),
    ]