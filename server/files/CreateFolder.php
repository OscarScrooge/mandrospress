<?php
/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/27/17
 * Time: 10:39 AM
 */

header('Access-Control-Allow-Origin: *');

$getData = file_get_contents("php://input");
$data= json_decode($getData);

$folder = $data->{'path'};
$permissions = octdec($data->{'permissions'});
$recursivePermissions = $data->{'recursivePermissions'};


if (!file_exists($folder)) {
    if (!mkdir($folder, $permissions,$recursivePermissions)) {
        echo 'Failed to create folders...';
    }else{
        chmod($folder, $permissions);
        echo 'ok';
    }
}else{
    echo 'Content Folder is created';
}

