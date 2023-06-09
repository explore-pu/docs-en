# Console commands

`Laravel-admin` has several console commands built in to help with development. Once laravel-admin is installed, you can use them directly.

## artisan admin {#artisan-admin}

Use the `php artisan admin` command to display the current version of `Laravel-admin` and list all available admin commands.

```shell
$ php artisan admin
    __                                __                __          _
   / /   ____ __________ __   _____  / /     ____ _____/ /___ ___  (_)___
  / /   / __ `/ ___/ __ `/ | / / _ \/ /_____/ __ `/ __  / __ `__ \/ / __ \
 / /___/ /_/ / /  / /_/ /| |/ /  __/ /_____/ /_/ / /_/ / / / / / / / / / /
/_____/\__,_/_/   \__,_/ |___/\___/_/      \__,_/\__,_/_/ /_/ /_/_/_/ /_/

Laravel-admin version 1.8.1

Available commands:
 admin:make              Make admin controller
 admin:controller        Make admin controller from giving model
 admin:menu              Show the admin menu
 admin:install           Install the admin package
 admin:publish           re-publish laravel-admin's assets, configuration, language and migration files. If you want overwrite the existing files, you can add the `--force` option
 admin:uninstall         Uninstall the admin package
 admin:import            Import a Laravel-admin extension
 admin:create-user       Create a admin user
 admin:reset-password    Reset password for a specific admin user
 admin:extend            Build a Laravel-admin extension
 admin:export-seed       Export seed a Laravel-admin database tables menu, roles and permissions
 admin:minify            Minify the CSS and JS
 admin:form              Make admin form widget
 admin:permissions       generate admin permission base on table name
 admin:action            Make a admin action
 admin:generate-menu     Generate menu items based on registered routes.
 admin:config            Compare the difference between the admin config file and the original
```

## artisan admin:make {#make}

This command is used to create the admin controller, passing in a model, it will build the required code of the three `grid`, `form` and `show` pages according to the fields of the model corresponding table.

```shell
$ php artisan admin:make PostController --model=App\\Post

// In the windows system
$ php artisan admin:make PostController --model=App\Post

App\Admin\Controllers\PostController created successfully.
```

Then open `app/Admin/Controllers/PostController.php` and you will see the code generated by this command.

If you add the option `--output` or `-O`, the code will be printed without creating a controller file.

## artisan admin:install & artisan admin:uninstall {#install&uninstall}

These two commands are used to install and uninstall the laravel-admin package, where `admin:install` will create several files or directories in the project.

```shell
.
├── app/Admin/
├── config/admin.php
├── resources/lang/
│     └── lang/
│       ├── en/admin.php
│       └── zh-CN/admin.php
├── database/migrations/2016_01_04_173148_create_admin_tables.php
└── public/vendor/laravel-admin/
```

Running `artisan admin:uninstall` will delete these files or directories

## artisan admin:create-user {#create-user}

> since v1.5.19

This command is used to create an admin user. After filling in the username and password interactively and selecting the role, a user can be created.

```shell
$ php artisan admin:create-user

 Please enter a username to login:
 >
```

## artisan admin:reset-password {#reset-password}

> since v1.5.19

This command is used to reset the password for the specified user and operate according to the prompt of the command.

```shell
$ php artisan admin:reset-password

 Please enter a username who needs to reset his password:
 >
```

## artisan admin:import {#import}

This command is used to import the relevant configuration after installing a laravel-admin extension. The specific usage is in the documentation of each extension.

## artisan admin:menu {#menu}

This is a no-use command to list the left menu data in json format.