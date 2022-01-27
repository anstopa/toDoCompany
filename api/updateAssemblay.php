<?php
include '../connection.php';


if ($db === false) {
    var_dump($db);
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
var_dump($_REQUEST);
$id = $_REQUEST['id'];
$name = $_REQUEST['name-options'];
$address = $_REQUEST['address-options'];
$tel = $_REQUEST['tel-options'];
$bok_note = $_REQUEST['bok-note-options'];
$int = $_REQUEST['int-checkbox-options'];
$tv = $_REQUEST['tv-checkbox-options'];
$priority = $_REQUEST['priority-options'];

if (empty($_REQUEST['tv-value-options'])) {
    $tv_value = 0;
} else {
    $tv_value = $_REQUEST['tv-value-options'];
}

$query = "UPDATE assemblies SET `name` = '$name', `address` = '$address', `tel_number` = '$tel', `bok_note` = '$bok_note', `inte` = '$int', `tv` = '$tv', `tv_value` = '$tv_value', `priority` = '$priority'
WHERE id = $id
";
mysqli_query($db, $query);


mysqli_close($db);
