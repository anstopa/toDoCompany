<?php
// require_once realpath("./" . __DIR__ . "/vendor/autoload.php");
echo __LINE__;

// use Dotenv\Dotenv;

// $dotenv = Dotenv::createImmutable(__DIR__);
// $dotenv->load();
require './vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('./');
$dotenv->load();



$db =  mysqli_connect($host, $user, $password, $databaseName, $dbport);
// if (!$db) {
//     die('Could not connect: ' . mysqli_connect_error());
// }
// echo 'Connection succesfully';