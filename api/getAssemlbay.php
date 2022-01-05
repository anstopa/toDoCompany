<?php
include 'connection.php';

$id = $_GET['region_id'];


$query = "SELECT * FROM montaze where region_id = '$id'";
$result = mysqli_query($db, $query);

if ($db === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
// $singleRow = mysqli_fetch_assoc($result);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_row($result)) {
        $tabel_assemblay_data[] = array(
            'id' => $row[0],
            'region_id' => $row[1],
            'date' => $row[2],
            'name' => $row[3],
            'address' => $row[4],
            'tel_num' => $row[5],
            'bok_note' => $row[6],
            'ins_note' => $row[7],
        );
    }
}
echo json_encode($tabel_assemblay_data);

// var_dump($singleRow);
// while ($row = mysqli_fetch_array($result)) {

//     echo "<br><br>";
// }




    // $result = mysqli_query($db, "SELECT * FROM montaze where id='$id'");
// if (mysqli_num_rows($result) > 0) {
//     while ($row = mysqli_fetch_row($result)) {
//         $table_data[] = array(
//             'id' => $row[0],
//             'region_name' => $row[1],
//             'assembler' => $row[2]
//         );
//     }
// }
// echo json_encode($table_data);
