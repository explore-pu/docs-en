# Language localization

## Form validation error localization {#form-validation-error-localization}

If the form validation error text is displayed in English, you need to install the validation language pack, you can refer to it[Laravel-lang](https://github.com/caouecs/Laravel-lang) The document。

## The controller field label {#the-controller-field-label}

After running 'admin:make' to create a controller, the labels of tables and forms default to '__('Column name')', as follows:

```php
    $grid->column('id', __('ID'));
    $grid->column('name', __('Name'));
    $grid->column('email', __('Email'));
    $grid->column('created_at', __('Created at'));
    $grid->column('updated_at', __('Updated at'));
```

You can directly modify the second parameter to the Chinese field label, but the best way is to set the 'string translation', go to the 'resourceslang' directory and create 'resources/lang/en.json' in the 'resources/lang' directory to add the corresponding translation:

```json
{
    "ID": "ID",
    "Created at":"Create time",
    "Updated at":"Update time",
    "name":"Name",
    "email":"Email"
}
```

In this way, other controllers can also reuse the translation here.