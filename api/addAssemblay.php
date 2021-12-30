

<?php
include 'connection.php';

$date = date('Y-m-d');
echo $phpDate;


$region = $_REQUEST['region'];
$name = $_REQUEST['name'];
$address = $_REQUEST['address'];
$tel = $_REQUEST['tel'];
$bok_note = $_REQUEST['bok_note'];
var_dump($_REQUEST);
if ($db === false) {
    var_dump($db);
    die("ERROR: Could not connect. " . mysqli_connect_error());
}



$query = "INSERT INTO montaze ( region_id, date, name, address, tel_number, bok_note) VALUES ('$region','$date','$name', '$address', '$tel' , '$bok_note')";

if (mysqli_query($db, $query)) {
    echo "<h3>Success</h3>";

    echo nl2br("\n$region\n $namename\n "
        . "$address\n $tel\n $bok_note");
} else {
    echo "ERROR:  $query. "
        . mysqli_error($db);
}

mysqli_close($db);
?>