<?php
include '../connection.php';

$id = $_REQUEST['id'];


$query = "SELECT * FROM assemblies where id = '$id'";
$result = mysqli_query($db, $query);

if ($db === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_row($result)) {
        $table_assemblay_data[] = array(
            'id' => $row[0],
            'region_id' => $row[1],
            'date' => $row[2],
            'name' => $row[3],
            'address' => $row[4],
            'tel_num' => $row[5],
            'bok_note' => $row[6],
            'priority' => $row[7],
            'int' => $row[8],
            'tv' => $row[9],
            'tv_value' => $row[10],

        );
    }
}
echo json_encode($table_assemblay_data);
