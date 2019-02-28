# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    replaces = [('meinberlin_ideas', '0005_use_explicit_item_ptr')]

    dependencies = [
        ('liqd_product_ideas', '0004_remove_category_related_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idea',
            name='item_ptr',
            field=models.OneToOneField(to='a4modules.Item', serialize=False, primary_key=True, related_name='liqd_product_ideas_idea', parent_link=True),
        ),
    ]
