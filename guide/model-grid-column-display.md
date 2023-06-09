# Column display

By default, the column shows the most primitive data in the database. If you need to modify the display of the column data, refer to the following method.

## Display callback {#Display-callback}

The `display()` method is used to process the value of the current column via the passed callback function:

```php
$grid->column('title')->display(function ($title) {

    return "<span style='color:blue'>$title</span>";

});
```

In the incoming anonymous function, the data can be processed in any way. In addition, the anonymous function binds the data of the current column as a parent object, and can call the data of the current row in the function:

```php
$grid->column('first_name');

$grid->column('last_name');

// `full_name` field that does not exist
$grid->column('full_name')->display(function () {
    return $this->first_name . ' ' . $this->last_name;
});
```

> Note: Try to avoid querying the database or calling the external API in the callback function. This will run the query or the call of the external interface when each row is rendered, which seriously affects the performance. A good way is to establish an association relationship with the model. Use the model's `with` method to query the associated data together.

## collection callback {#collection-callback}

This method is different from the `display` callback in that it can modify data in batches. Refer to the following use cases in the following examples:

```php 
use Illuminate\Database\Eloquent\Collection;

$grid->model()->collection(function(Collection $collection) {      
  // 1. You can add fields to each column, similar to the effect of the display callback above 
  foreach ($collection as $item) {
    $item->full_name = $item->first_name. ''. $item->last_name;
  }
  // 2. Add a sequence column to the table   
  foreach ($collection as $index => $item) {     
    $item->number = $index;   
  }      
  // 3. Get data from external interface and fill it into the model collection   
  $ids = $collection->pluck('id');   
  $data = getDataFromApi($ids);   
  foreach ($collection as $index => $item) {
    $item->column_name = $data[$index];
  }

  // Finally must return the collection object   
  return $collection; 
}); 
```

`$collection` represents the current model collection of tabular data. You can read or modify its data according to your needs.

## Display different components according to conditions {#Display-different-components-according-conditions}

If this column is to be displayed as a different component based on certain criteria

```php
$grid->column('title')->display(function ($title, $column) {
    
    // If the value of the status field of this column is equal to 1, directly display the title field
    If ($this->status == 1) {
        return $title;
    }
    
    // Otherwise it is displayed as editable
    return $column->editable();
});
```

## Content Mapping {#Content-Mapping}

> since v1.5.17

If the value of the field `gender` is `f`, `m`, it needs to be displayed with `female` and `male` respectively.

```php
$grid->column('gender')->using(['f' => 'female', 'm' => 'male']);
```

## Content replacement {#Content-replacement}

If you need to replace some of the values of this column with other content to display:

```php
$grid->column('cost')->replace([0 => '-']);
```

## Column view {#Column-view}

Use the `view()` method to make the current column render a view display output, such as having a view `resources/views/content.blade.php`

```php
<p>

{{ $value }}

{{ $model->id }}

</p>
```

By default, two variables of the view are passed in, `$model` is the model of the current row, and `$value` is the value of the current column.

Then use the following call to render this view output

```php
$grid->column('content')->view('content');
```

This method can be used to render complex column content.

## Column expansion {#Column-expansion}

> Since v1.6.10

If there are more fields in a row, you can hide too much content by using the column expansion feature. Expand the display by clicking on the column, or click to expand other related data, such as the following example, to expand the 10 latest comments under an article:

```php
Use Encore\Admin\Widgets\Table;

$grid->column('title', 'title')->expand(function ($model) {

    $comments = $model->comments()->take(10)->get()->map(function ($comment) {
        return $comment->only(['id', 'content', 'created_at']);
    });

    return new Table(['ID', 'content', 'release time'], $comments->toArray());
});
```

The effect is as follows:

![Kapture 2019-03-10 at 23 46 20](https://user-images.githubusercontent.com/1479100/54087610-7abb7280-438f-11e9-842a-012ac2063a7a.gif)

Any content that can be rendered can be returned in the closure function.

## Popup modal box {#Popup-modal-box}

> Since v1.6.10

Similar to the `column expansion` function, you can display more content by popping up the modal box.

```php
$grid->column('title', 'title')->modal('latest comment', function ($model) {

    $comments = $model->comments()->take(10)->get()->map(function ($comment) {
        return $comment->only(['id', 'content', 'created_at']);
    });

    return new Table(['ID', 'content', 'release time'], $comments->toArray());
});
```

The effect is as follows:

![Kapture 2019-03-10 at 23 43 49](https://user-images.githubusercontent.com/1479100/54087609-7abb7280-438f-11e9-8a44-7e68bb126cd1.gif)

## Gavatar {#Gavatar}

If this column of data is a email, you want to display it as a Gavatar:

```php
$grid->column('email', 'avatar')->gravatar();

// set the size
$grid->column('email', 'avatar')->gravatar(45);
```

## File size {#File-size}

If the data in this column is the number of bytes representing the file size, you can display the more readable text by calling the `filezise` method.

```php
$grid->column('file_size')->filesize();
```

Such a value `199812019` will be displayed as `190.56 MB`

## Download link {#Download-link}

If the data in this column stores the path to the uploaded file, you can set this column as a downloadable link by calling the `downloadable` method.

```php
$grid->column('file_path')->downloadable();
```

## Copy button {#Copy-button}

With the following call, a copy icon will appear in front of each line of text in this column, click on it to copy its value

```php
$grid->column('title')->copyable();
```

## QR code {#QR-code}

Through the following call, a QR code icon will appear in front of each line of text in this column. Click on it to expand a small bullet box, which will display the QR code of this column value.

```php
$grid->column('link')->qrcode();
```

## Display image {#Display-image}

If the `picture` field holds the full address of the picture, or the path, the column can be rendered as a picture display in the following way.

Multi-graph display is supported, and field output is required as an array.

```php
$grid->column('picture')->image();

// Set the server and width
$grid->column('picture')->image('http://xxx.com', 100, 100);

// show multiple images
$grid->column('pictures')->display(function ($pictures) {

    return json_decode($pictures, true);

})->image('http://xxx.com', 100, 100);
```

## Display label {#Display-label}

![WX20190830-001812](https://user-images.githubusercontent.com/1479100/63958209-82491200-cabc-11e9-9144-760e69779608.png)

Display the field as a `label` tag. If the field is output as an array, it will appear as multiple `label` tags.

```php
$grid->column('name')->label();

// Set the color, the default `success`, optional `danger`, `warning`, `info`, `primary`, `default`, `success`
$grid->column('name')->label('danger');

// receive array
$grid->column('keywords')->label();
```

If you need to display the different values of the `status` field as labels of different colors

```php
$grid->column('status')->label([
    1 => 'default',
    2 => 'warning',
    3 => 'success',
    4 => 'info',
]);
```

## Show icon {#Show-icon}

Display the field as a `font-awesome` icon, more icons refer to http://fontawesome.io/icons/

```php
$grid->column('status')->icon([
    0 => 'toggle-off',
    1 => 'toggle-on',
], $default = '');
```

## Link {#Link}

Display the field as a link.

```php
// When the link method does not pass parameters, the linked `href` and `text` are the values of the current column.
$grid->column('homepage')->link();

// or pass in a specified href
$grid->column('homepage')->link($href);
```

## Table {#Table}

Display the field as a table, requiring the value of the current column to be a two-dimensional array

```php
// table method does not pass parameters, the title of the table is the key of each column of the two-dimensional array
$grid->column('settings')->table();

// You can specify the key for each column by the following method
$grid->column('settings')->table(['key' => 'key', 'val' => 'value']);
```

## Progress bar {#Progress-bar}

![WX20190830-002033](https://user-images.githubusercontent.com/1479100/63958092-401fd080-cabc-11e9-9d51-f879e7708bcb.png)

Display the field as a progress bar, the value of the current column needs to be a value, the default maximum value is 100,

```php
$grid->column('progress')->progressBar();

// optional parameters
$grid->column('progress')->progressBar($style = 'primary', $size = 'sm', $max = 100);
$style` is used to set the style, optional values `danger`, `warning`, `info`, `primary`, `default`, `success
```

`$size` is used to set the size. The optional values are `sm`, `xs`, `xxs`, `$max` to set the maximum range.

## Loading status {#Loading-status}

```php
$grid->column('status')->loading([1, 2, 3]);
```

If the value of status is one of `[1, 2, 3]`, it will be displayed as a loading icon.

Show other field values displayed

```php
$grid->column('status')->loading([1, 2, 3], [
    4 => 'Complete'
]);
```

## Image Carousel {#Image-Carousel}

If the field value is an image array, you can use the following call to display the image carousel component.

```php
$grid->column('images')->carousel();

// Set the display size and image server
$grid->column('images')->carousel($width = 300, int $height = 200, $server);
```

## Date format {#Date-format}

> Since v1.7.3

If the field value is a timestamp, you can format the output with the `date` method.

```php
$grid->column('created_at')->date('Y-m-d');
```

For the format parameters, please refer to PHP's [date](http://php.net/manual/en/function.date.php) function.

## Boolean display {#Boolean-display}

> Since v1.7.6

![WX20190830-002712](https://user-images.githubusercontent.com/1479100/63958756-5d08d380-cabd-11e9-9a00-1ad20173c28a.png)

After converting this column to bool value, it will be displayed as `✓` and `✗`.

```php
$grid->column('approved')->bool();
```

You can also specify the display according to the value of this column, such as the value of the field `Y` and `N` means `true` and `false`

```php
$grid->column('approved')->bool(['Y' => true, 'N' => false]);
```

## Dot prefix {#Dot-prefix}

> Since v1.7.6

![WX20190830-001924](https://user-images.githubusercontent.com/1479100/63958090-3f873a00-cabc-11e9-9c9d-06de5e37ae54.png)

This method is used to add a colored dot to the front of the column text to provide a more intuitive and clear visual effect.

```php
$grid->column('status')->using([
    1 => 'Audit passed',
    2 => 'Draft',
    3 => 'Publish',
    4 => 'Other',
], 'Unknown')->dot([
    1 => 'danger',
    2 => 'info',
    3 => 'primary',
    4 => 'success',
], 'warning');
```

According to the above code, use the `using` method to map the display text, and then use `dot` to set the color of the dot. The values of the color are `danger`, `info`, `primary`, `success`, `warning`. These five choices.

## Column action {#Column-action}

> Since v1.7.6

![WX20190830-001824](https://user-images.githubusercontent.com/1479100/63958089-3eeea380-cabc-11e9-9a3e-0f3a22ae9756.png)

> Note: Please read [[Custom Action - row action\]](https://laravel-admin.org/docs/en/model-grid-custom-actions#row-action) before using this method.

This function can display a column as an actionable button. For example, the above figure shows a column operation of `Stars` and 'Cancel Stars'. After clicking the star icon in this column, the background will switch the state of the field. Then the page icon is also followed by the switch, the specific implementation code is as follows:

```php
<?php

Namespace App\Admin\Actions\Document;

Use App\Models\Document;
Use Encore\Admin\Actions\RowAction;

class StarDocument extends RowAction
{
    // After the page clicks on the chart in this column, send the request to the backend handle method to execute
    public function handle(Document $document)
    {
        // Switch the value of the `star` field and save
        $document->star = (int) !$document->star;
        $document->save();

        // return a new html to the front end after saving
        $html = $document->star ? "<i class=\"fa fa-star-o\"></i>" : "<i class=\"fa fa-star\"></i>" ;

        return $this->response()->html($html);
    }

    // This method displays different icons in this column based on the value of the `star` field.
    public function display($star)
    {
        return $star ? "<i class=\"fa fa-star-o\"></i>" : "<i class=\"fa fa-star\"></i>";
    }
}
```

Finally, use this action in grid:

```php
use App\Admin\Actions\Document\StarDocument;

$grid->column('star')->action(StarDocument::class);
```