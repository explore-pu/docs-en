# External data sources

## Data from model {#Data-from-model}

If you use a model to get data, modifying the source data is straightforward:

```php
// Add default query criteria
$grid->model()->where('id', '>', 100);

// Set the initial sort criteria
$grid->model()->orderBy('id', 'desc');

```

For other query methods, please refer to the query method of 'eloquent'.

## The data comes from an external API {#the-data-comes-from-an-external-api}

Since the 'model-grid' data relies on the 'Eloquent model' to query and retrieve, if your list data does not come from a database but from an external API, then you cannot directly use the regular method to deal with it.

Since there is no unified way to obtain external data, there is no encapsulated unified method to process external data in laravel-admin, but we can achieve data reading, querying, sorting and other operations by overriding some common methods of the 'Eloquent model'.

The following example uses the 'Douban Movie' API to retrieve and display data:

```php
<?php

namespace App\Models\Movie;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Request;

class InTheater extends Model
{
    public function paginate()
    {
        $perPage = Request::get('per_page', 10);

        $page = Request::get('page', 1);

        $start = ($page-1)*$perPage;

        $data = file_get_contents("https://api.douban.com/v2/movie/in_theaters?city=上海&start=$start&count=$perPage");

        $data = json_decode($data, true);

        extract($data);

        $movies = static::hydrate($subjects);

        $paginator = new LengthAwarePaginator($movies, $total, $perPage);

        $paginator->setPath(url()->current());

        return $paginator;
    }

    public static function with($relations)
    {
        return new static;
    }

    // Override 'order by' to collect the sorted fields and directions
    public function orderBy($column, $direction = 'asc')
    {

    }

    // Override 'where' to collect filtered fields and criteria
    public function where($column, $operator = null, $value = null, $boolean = 'and')
    {

    }
}
```

API data is obtained through the 'paginate' and 'with' methods that cover the model, and individual data is obtained through the 'findOrFail' method to be displayed in the form

Similarly, if you want to obtain or save data in the form form, you can also override the corresponding method:

```php
// Get individual data items and display them in the form
public function findOrFail($id)
{
    $data = file_get_contents("http://api.douban.com/v2/movie/subject/$id");

    $data = json_decode($data, true);

    return static::newFromBuilder($data);
}

// Save the submitted form data
public function save(array $options = [])
{
    $attributes = $this->getAttributes();

    // save $attributes
}
```

## The data comes from complex SQL queries {#the-data-comes-from-complex-sql-queries}

If the source data needs to execute more complex SQL statements to obtain, then there are two methods, the first method is the above method, overriding the model method implementation

```php
public function paginate()
{
    $perPage = Request::get('per_page', 10);

    $page = Request::get('page', 1);

    $start = ($page-1)*$perPage;

    // Run SQL to get the data array
    $sql = 'select * from ...';

    $result = DB::select($sql);

    $movies = static::hydrate($result);

    $paginator = new LengthAwarePaginator($movies, $total, $perPage);

    $paginator->setPath(url()->current());

    return $paginator;
}

public static function with($relations)
{
    return new static;
}
```

The second way is to establish view and model bindings in the database (not tested, theoretically possible)