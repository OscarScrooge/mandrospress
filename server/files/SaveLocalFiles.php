<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 8/7/17
 * Time: 4:46 PM
 */
header('Access-Control-Allow-Origin: *');

class SaveLocalFiles{



    private $path;
    private $files;

    /**
     * SaveLocalFiles constructor.
     * @param $path
     * @param $files
     */
    public function __construct($path,$files) {

        $this->path=$path;
        $this->files=$files;

        $this->save($this->getPath(),$this->getFiles());

    }

    /**
     * @param $path
     * @param $files
     */
    private function save($path,$files) {

        $array = array();

        foreach ($files as $key) {
            # code...

            $tmp_name = $key['tmp_name'];
            $name = $key['name'];
            $type = $key['type'];
            $localPath = $path . $name;

            if (copy($tmp_name, $localPath)) {
                $url ='localhost/mandmin/'.str_replace('../','',$localPath);
                array_push($array,
                    array('name'=>$name,'url'=> $url,'type'=>$type)
                );
            } else {
                echo "Something is wrong, file couldn't be upload: " . $name;
            }
        }
       echo json_encode($array);
    }

    /**
     * @return mixed
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @return mixed
     */
    public function getFiles()
    {
        return $this->files;
    }



}

$path = $_POST['path'];
$files = $_FILES;

$save = new SaveLocalFiles($path,$files);