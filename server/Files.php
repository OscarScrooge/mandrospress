<?php
/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/27/17
 * Time: 10:39 AM
 */

header('Access-Control-Allow-Origin: *');


$filename='../content';



echo $filename;

// To create the nested structure, the $recursive parameter
// to mkdir() must be specified.
if (!file_exists($filename)) {
    if (!mkdir($filename, 0777,true)) {
        echo 'Failed to create folders...';
    }else{
        chmod($filename, 0777);
    }
}else{
    echo 'FILE EXIST';
}

