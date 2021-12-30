<?php

include 'connection.php';


$result = mysqli_query($db, "SELECT * FROM regions");
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_row($result)) {
        $table_data[] = array(
            'id' => $row[0],
            'region_name' => $row[1],
            'assembler' => $row[2]
        );
    }
}
echo json_encode($table_data);
