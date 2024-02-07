<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With");
header("Content-Type: application/json");

$remoteApiUrl = 'http://centragroup.triverseadvertising.com/api/KeywordsCopy23..json';

// Check if the request is a GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get the search word from the query parameter
    $searchWord = isset($_GET['searchWord']) ? $_GET['searchWord'] : null;

    // Fetch remote data
    $remoteData = @file_get_contents($remoteApiUrl);

    if ($remoteData === false) {
        http_response_code(500); // Internal Server Error
        echo json_encode(array('error' => 'Failed to fetch data'));
    } else {
        // Decode the JSON data
        $data = json_decode($remoteData, true);

        // Check if the search word is provided
        if ($searchWord !== null) {
            // Filter the data based on the search word
            $filteredData = array_filter($data['keywords'], function ($keyword) use ($searchWord) {
                return stripos($keyword, $searchWord) !== false;
            });

            // Encode and send the filtered data as JSON response
            echo json_encode(array('keywords' => array_values($filteredData)));
        } else {
            http_response_code(400); // Bad Request
            echo json_encode(array('error' => 'Search word not provided'));
        }
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('error' => 'Method not allowed'));
}
    