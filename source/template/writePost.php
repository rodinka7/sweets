<?php

$filename = fopen('content.json', 'w');

$text = file_get_contents('php://input');

fwrite($filename, $text);

fclose($filename);

?>