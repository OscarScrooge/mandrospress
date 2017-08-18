<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 8/1/17
 * Time: 1:20 PM
 */
class Delete
{

    private $type;
    private $dataPut;
    private $resultNumber;
    private $section;
    private $connectionDB;
    private $condition;

    /**
     * Insert constructor.
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $connectionDB
     */
    function __construct($type,$dataPut,$resultNumber,$section,$condition,$connectionDB)
    {
        $this->type = $type;
        $this->dataPut = $dataPut;
        $this->resultNumber = $resultNumber;
        $this->section = $section;
        $this->connectionDB = $connectionDB;
        $this->condition = $condition;

        $this->excecuteQuery($this->getType(),$this->getDataPut(),$this->getResultNumber(),$this->getSection(),$this->getCondition(),$this->getConnectionDB());

    }

    /**
     * @param $type
     * @param $dataDelete
     * @param $resultNumber
     * @param $section
     * @param $conn
     */
    private function excecuteQuery($type,$dataDelete,$resultNumber,$section,$condition,$conn){

        $pieces = explode(",", $dataDelete);
        $i=1;
        $values="";

        for($k=0;$k<sizeof($pieces);$k++){
            $values.="?,";
        }
        $deleteValues = substr( $values , 0 , -1);

        $query= "delete from mandmin.".$section." where ".$condition;
        try{

            $stmt = $conn->getConnection()->prepare($query);
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

    /**
     * @return mixed
     */
    public function getCondition()
    {
        return $this->condition;
    }




}