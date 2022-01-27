<?php
include '../connection.php';

if ($db === false) {
    var_dump($db);
    die("ERROR: Could not connect. " . mysqli_connect_error());
};

$id = $_REQUEST['id'];
$query = "UPDATE assemblies SET isDone = '1' WHERE id='$id'";
mysqli_query($db, $query);
