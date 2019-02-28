# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import ckeditor_uploader.fields


class Migration(migrations.Migration):

    replaces = [('meinberlin_documents', '0007_update_text_field')]

    dependencies = [
        ('liqd_product_documents', '0006_update_weight_field'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paragraph',
            name='text',
            field=ckeditor_uploader.fields.RichTextUploadingField(),
        ),
    ]
