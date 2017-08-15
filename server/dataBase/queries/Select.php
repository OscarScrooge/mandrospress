<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/28/17
 * Time: 6:29 PM
 */

header('Access-Control-Allow-Origin: *');
include_once '../connection/ConnectionDB.php';
class Select
{

    private $type;
    private $dataPut;
    private $resultNumber;
    private $section;
    private $condition;
    private $connectionDB;
    private $order;

    /**
     * Insert constructor.
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $connectionDB
     */
    function __construct($type,$dataPut,$resultNumber,$section,$condition,$connectionDB,$order)
    {
        $this->type = $type;
        $this->dataPut = $dataPut;
        $this->resultNumber = $resultNumber;
        $this->section = $section;
        $this->condition = $condition;
        $this->connectionDB = $connectionDB;
        $this->order=$order;

        $this->doQuery($this->getType(),
            $this->getDataPut(),
            $this->getResultNumber(),
            $this->getSection(),
            $this->getCondition(),
            $this->getConnectionDB(),
            $this->getOrder()
        );

    }

    /**
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $conn
     */
    private function doQuery($type,$dataPut,$resultNumber,$section,$condition,$conn,$order){


        if($condition!==''){
            $condition.=' where '.$condition;
        }

        $query= "select ".$dataPut." from mandmin.".$section." ".$condition." ".$order;

        try{

            $stmt = $conn->getConnection()->prepare($query);
            $stmt->execute();
            $datos = $stmt->fetchAll();
            echo $jsonData = json_encode($datos); ;
//            while( $datos = $stmt->fetch() ){
//                array_push($array,$datos);
//                echo $datos['categorie'] . '<br />';
//            }

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

    /**
     * @return mixed
     */
    public function getOrder()
    {
        return $this->order;
    }



}

