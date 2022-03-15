<?php
require_once realpath(__DIR__ . "/vendor/autoload.php");


use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$host = $_ENV['DB_HOST'];
$user = $_ENV['DB_USER'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];



$db =  new mysqli($host, $user, $password, $dbname);
$db2 = new PDO("mysql:host=$host; dbname=$dbname", "$user", "$password" );

if ($db->connect_errno) {
    throw new RuntimeException('mysqli connection error: ' . $db->connect_error);
}