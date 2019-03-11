<?php

use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get(
    '/hi/{name}',
    function ($name) {
        echo "<h1>Hello {$name}!</h1>";
    }
);

$app->handle();