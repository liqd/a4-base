# Generated by Django 3.2.10 on 2022-01-11 15:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('a4_candy_polls', '0003_copy_polls_from_aplus_to_a4_tables'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aplusquestion',
            name='poll',
        ),
        migrations.RemoveField(
            model_name='aplusvote',
            name='choice',
        ),
        migrations.RemoveField(
            model_name='aplusvote',
            name='creator',
        ),
        migrations.DeleteModel(
            name='APlusChoice',
        ),
        migrations.DeleteModel(
            name='APlusQuestion',
        ),
        migrations.DeleteModel(
            name='APlusVote',
        ),
    ]
