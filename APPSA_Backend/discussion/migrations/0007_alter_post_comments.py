# Generated by Django 4.2.6 on 2023-12-09 21:03

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("discussion", "0006_post_comments"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="comments",
            field=models.ManyToManyField(
                blank=True, related_name="comments", to="discussion.comment"
            ),
        ),
    ]
