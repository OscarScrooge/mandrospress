<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 8/17/17
 * Time: 4:10 PM
 */

header('Access-Control-Allow-Origin: *');

class DeleteFileFromLocal
{

    private $arrayPaths;

    public function __construct($arrayPaths)
    {
        $this->arrayPaths=$arrayPaths;
        $this->deleteFile();
    }

    private function deleteFile(){

        $array=$this->getArrayPaths();

        foreach ($array as $path){
            $array = explode("localhost/mandmin/", $path->{'filePath'});
            $deleteFrom= '../../'.$array[1];
            echo $deleteFrom;
            $deleted = unlink($deleteFrom);
            echo $deleted;
        }

    }

    /**
     * @return mixed
     */
    public function getArrayPaths()
    {
        return $this->arrayPaths;
    }


}


$getData = file_get_contents("php://input");
$data= json_decode($getData);
$delete = new DeleteFileFromLocal($data);
// $data->{'filePath'};