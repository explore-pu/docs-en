# laravel-admin

::: tip Important reminder
**If you feel that this document has shortcomings, please participate in the modification [docs-en](https://github.com/elegant-admin/docs-en)**
:::

`laravel-admin` is administrative interface builder for laravel which can help you build CRUD backends just with few lines of code.

> Since I don't have much time to maintain this project, laravel-admin only supports the LTS version of Laravel (currently Laravel 5.5).

[Demo](http://demo.laravel-admin.org/) use `username/password:admin/admin`

Inspired by [SleepingOwlAdmin](https://github.com/sleeping-owl/admin) and [rapyd-laravel](https://github.com/zofe/rapyd-laravel).

[Documentation](https://elegant-admin.github.io/docs-en/) | [中文文档（GitHub）](https://elegant-admin.github.io/docs-cn//) | [中文文档（码云）](https://elegant-admin.gitee.io/docs-cn//)

## Screenshots {#Screenshots}

![laravel-admin](https://cloud.githubusercontent.com/assets/1479100/19625297/3b3deb64-9947-11e6-807c-cffa999004be.jpg)

## Installation {#Installation}

> This package requires PHP 7+ and Laravel 5.5+

First, install laravel 5.5, and make sure that the database connection settings are correct.

```
composer require encore/laravel-admin
```

Then run these commands to publish assets and config：

```
php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"
```

After run command you can find config file in `config/admin.php`, in this file you can change the install directory,db connection or table names.

At last run following command to finish install.

```
php artisan admin:install
```

Open `http://localhost/admin/` in browser,use username `admin` and password `admin` to login.

## Default Settings {#Default Settings}

The file in `config/admin.php` contains an array of settings, you can find the default settings in there.

## Other {#Other}

`laravel-admin` based on following plugins or services:

- [Laravel](https://laravel.com/)
- [AdminLTE](https://almsaeedstudio.com/)
- [Datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/)
- [font-awesome](http://fontawesome.io/)
- [moment](http://momentjs.com/)
- [Google map](https://www.google.com/maps)
- [Tencent map](http://lbs.qq.com/)
- [bootstrap-fileinput](https://github.com/kartik-v/bootstrap-fileinput)
- [jquery-pjax](https://github.com/defunkt/jquery-pjax)
- [Nestable](http://dbushell.github.io/Nestable/)
- [toastr](http://codeseven.github.io/toastr/)
- [X-editable](http://github.com/vitalets/x-editable)
- [bootstrap-number-input](https://github.com/wpic/bootstrap-number-input)
- [fontawesome-iconpicker](https://github.com/itsjavi/fontawesome-iconpicker)

## Donation {#Donation}

> Help keeping the project development going, by donating a little. Thanks in advance.

[![PayPal Me](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/zousong)

## [License](https://laravel-admin.org/docs/en#License)

`laravel-admin` is licensed under [The MIT License (MIT)](https://laravel-admin.org/en/LICENSE).
