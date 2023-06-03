<?php

require_once 'rb.php';

$db = [
    'dsn' => 'mysql:host=localhost;dbname=daffier_pgart;charset=utf8',
    'user' => 'root',
    'pass' => 'daFEds983LSjdiSHH',
];

R::setup($db['dsn'], $db['user'], $db['pass']);
R::freeze(true);