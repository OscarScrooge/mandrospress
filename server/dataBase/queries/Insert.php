<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/28/17
 * Time: 2:40 PM
 */

header('Access-Control-Allow-Origin: *');
include_once '../connection/ConnectionDB.php';

class Insert
{
    private $type;
    private $dataPut;
    private $resultNumber;
    private $section;
    private $connectionDB;

    /**
     * Insert constructor.
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $connectionDB
     */
    function __construct($type,$dataPut,$resultNumber,$section,$connectionDB)
    {
        $this->type = $type;
        $this->dataPut = $dataPut;
        $this->resultNumber = $resultNumber;
        $this->section = $section;
        $this->connectionDB = $connectionDB;

        $this->doQuery($this->getType(),$this->getDataPut(),$this->getResultNumber(),$this->getSection(),$this->getConnectionDB());

    }

    /**
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $conn
     */
    private function doQuery($type,$dataPut,$resultNumber,$section,$conn){

        $pieces = explode(",", $dataPut);
        $i=1;
        $insertValues="";

        for($k=0;$k<sizeof($pieces);$k++){
            $insertValues.="?,";
        }
        $insertValues = substr( $insertValues , 0 , -1);

        $query= "insert into mandmin.".$section." (categorie,description) values (".$insertValues.")";

        echo $query;

        try{
            $prep = array(sizeof($pieces));

            $stmt = $conn->getConnection()->prepare($query);
            foreach ($pieces as $value){
                $stmt->bindParam($i,$prep[$i]);
                $prep[$i]=$value;
                $i++;
            }
            $stmt->execute();
        }catch (Exception $e){
          echo  $e->getMessage();
        }finally{
            $conn=null;
        }




    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return mixed
     */
    public function getDataPut()
    {
        return $this->dataPut;
    }

    /**
     * @return mixed
     */
    public function getResultNumber()
    {
        return $this->resultNumber;
    }

    /**
     * @return mixed
     */
    public function getSection()
    {
        return $this->section;
    }

    /**
     * @return mixed
     */
    public function getConnectionDB()
    {
        return $this->connectionDB;
    }




}