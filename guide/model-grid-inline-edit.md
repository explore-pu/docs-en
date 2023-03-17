# Inline editing

The data table has a number of methods to help you edit the data directly in the table.

> Note: For each column edit setting, you need to have a corresponding field in the form.

## Editable {#Editable}

With the `editable` method, you can click on the data in the table and edit the saved data in the pop-up dialog box.

## Text input {#Text-input}

```php
$grid->column('title')->editable();
```

## Textarea input {#Textarea-input}

```php
$grid->column('title')->editable('textarea');
```

## Select {#Select}

The second parameter is the option selected by select

```php
$grid->column('title')->editable('select', [1 => 'option1', 2 => 'option2', 3 => 'option3']);
```

## Date selection {#Date-selection}

```php
$grid->column('birth')->editable('date');
```

## Date and time selection {#Date-and-time-selection}

```php
$grid->column('published_at')->editable('datetime');
```

## Year selection {#Year-selection}

```php
$grid->column('year')->editable('year');
```

## Month selection {#Month-selection}

```php
$grid->column('month')->editable('month');
```

## Day selection {#Day-selection}

```php
$grid->column('day')->editable('day');
```

## Switch {#Switch}

> Note: In the `grid`, set a `switch` for a field, and you need to set the same `switch` for the field in `form`.

Quickly turn the column into a switch component, using the following:

```php
$grid->column('status')->switch();

// set text, color, and stored values
$states = [
    'on' => ['value' => 1, 'text' => 'open', 'color' => 'primary'],
    'off' => ['value' => 2, 'text' => 'close', 'color' => 'default'],
];
$grid->column('status')->switch($states);
```

## Switch group {#Switch-group}

> Note: `switch` is set for some fields in `grid`, and the same `switch` should be set for these fields in `form`.

Quickly turn the column into a switch component group, using the following:

```php
$states = [
    'on' => ['text' => 'YES'],
    'off' => ['text' => 'NO'],
];

$grid->column('switch_group')->switchGroup([
    'hot' => 'hot',
    'new' => 'latest'
    'recommend' => 'recommended',
], $states);
```

## Radio {#Radio}

Set the column to the `radio` component and set the same `radio` for these fields in the `form` method.

```php
$grid->column('options')->radio([
    1 => 'Sed ut perspiciatis unde omni',
    2 => 'voluptatem accusantium doloremque',
    3 => 'dicta sunt explicabo',
    4 => 'laudantium, totam rem aperiam',
]);
```

## Checkbox {#Checkbox}

Set this column to the `checkbox` component and also set the same `checkbox` for these fields in the `form` method.

```php
$grid->column('options')->checkbox([
    1 => 'Sed ut perspiciatis unde omni',
    2 => 'voluptatem accusantium doloremque',
    3 => 'dicta sunt explicabo',
    4 => 'laudantium, totam rem aperiam',
]);
```