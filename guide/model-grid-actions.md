# Model grid row actions

`model-grid` By default, there are two actions `edit` and `delete`, which can be turned off in the following way:

```php
 $grid->actions(function ($actions) {
    $actions->disableDelete();
    $actions->disableEdit();
    $actions->disableView();
});
```

You can get the data for the current row by `$actions` parameter passed in:

```php
 $grid->actions(function ($actions) {

    // the array of data for the current row
    $actions->row;

    // gets the current row primary key value
    $actions->getKey();
});
```

If you have a custom action button, you can add the following:

```php
$grid->actions(function ($actions) {

    // append an action.
    $actions->append('<a href=""><i class="fa fa-eye"></i></a>');

    // prepend an action.
    $actions->prepend('<a href=""><i class="fa fa-paper-plane"></i></a>');
});
```

## Custom actions {#Custom-actions}

> Starting with v1.7.3, the following documents are deprecated, . please use [Custom actions](https://laravel-admin.org/docs/model-grid-custom-actions) instead.

If you have more complex actions, you can refer to the following ways:

First define the action class:

```php
<?php

namespace App\Admin\Extensions;

use Encore\Admin\Admin;

class CheckRow
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    protected function script()
    {
        return <<<SCRIPT

$('.grid-check-row').on('click', function () {

    // Your code.
    console.log($(this).data('id'));

});

SCRIPT;
    }

    protected function render()
    {
        Admin::script($this->script());

        return "<a class='btn btn-xs btn-success fa fa-check grid-check-row' data-id='{$this->id}'></a>";
    }

    public function __toString()
    {
        return $this->render();
    }
}
```

Then add the action:

```php
$grid->actions(function ($actions) {

    // add action
    $actions->append(new CheckRow($actions->getKey()));
});
```