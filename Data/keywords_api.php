<?php

header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Headers: X-Requested-With");



$remoteApiUrl = 'http://centragroup.triverseadvertising.com/data/Keywords.json';



$remoteData = @file_get_contents($remoteApiUrl);

        

        if ($remoteData === false) {

            echo json_encode(array('error' => 'Failed to fetch data'));

        } else {

            header("Content-Type: application/json");

            echo $remoteData;

        }

?>



