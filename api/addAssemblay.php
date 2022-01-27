<?php
include '../connection.php';

$date = date('Y-m-d');


$region = $_REQUEST['region'];
$name = $_REQUEST['name'];
$address = $_REQUEST['address'];
$tel = $_REQUEST['tel'];
$bok_note = $_REQUEST['bok-note'];
$int = $_REQUEST['int-checkbox'];
$tv = $_REQUEST['tv-checkbox'];

var_dump($_REQUEST);

if (empty($_REQUEST['tv-value-options'])) {
    $tv_value = 0;
} else {
    $tv_value = $_REQUEST['tv-value-options'];
}

if ($db === false) {
    var_dump($db);
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


$query = "INSERT INTO assemblies ( region_id, date, name, address, tel_number, bok_note, inte, tv, tv_value) 
VALUES ('$region','$date','$name', '$address', '$tel' , '$bok_note', '$int', '$tv', '$tv_value')";

if (mysqli_query($db, $query)) {
    echo "<h3>Success</h3>";

    echo nl2br("\n$region\n $name\n "
        . "$address\n $tel\n $bok_note");
} else {
    echo "ERROR:  $query. "
        . mysqli_error($db);
}

mysqli_close($db);
