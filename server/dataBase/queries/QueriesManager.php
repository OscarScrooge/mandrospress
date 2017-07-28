<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/28/17
 * Time: 2:12 PM
 */

header('Access-Control-Allow-Origin: *');

include_once '../connection/ConnectionDB.php';
include './Insert.php';

class QueriesManager
{
    /**
     * @var $type: type of query (insert, select,update, etc..)
     * @var $dataRequest: table data you want request/put
     * @var $resultNumber:  results number you want request/pu
     * @var $section: section for which you request/put data
     */
    private $type;
    private $dataPutRequest;
    private $resultNumber;
    private $section;
    private $conn;

    function __construct($type,$dataPutRequest,$resultNumber,$section)
    {

        $this->type=$type;
        $this->dataPutRequest=$dataPutRequest;
        $this->resultNumber=$resultNumber;
        $this->section=$section;
        $this->dbconnection();
        switch (strtolower($type)){

            case 'insert':
                $this->insert(strtolower($this->getType()),
                    strtolower($this->getDataPutRequest()),
                    strtolower($this->getResultNumber()),
                    strtolower($this->getSection()));
                break;
            default:
                echo "Defaul Case";
                break;

        }



    }

    function insert($type,$dataPutRequest,$resultNumber,$section){

        $insert = new Insert($type,$dataPutRequest,$resultNumber,$section,$this->getConn());

    }

    function dbconnection(){
        $this->conn=new ConnectionDB("localhost","mysql","mandmin","root","admin");
    }

    /**
     * @return mixed
     */
    public function getConn()
    {
        return $this->conn;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getDataPutRequest()
    {
        return $this->dataPutRequest;
    }

    /**
     * @param mixed $dataPutRequest
     */
    public function setDataPutRequest($dataPutRequest)
    {
        $this->dataPutRequest = $dataPutRequest;
    }

    /**
     * @return mixed
     */
    public function getResultNumber()
    {
        return $this->resultNumber;
    }

    /**
     * @param mixed $resultNumber
     */
    public function setResultNumber($resultNumber)
    {
        $this->resultNumber = $resultNumber;
    }

    /**
     * @return mixed
     */
    public function getSection()
    {
        return $this->section;
    }

    /**
     * @param mixed $section
     */
    public function setSection($section)
    {
        $this->section = $section;
    }

}
$getData = file_get_contents("php://input");
$data= json_decode($getData);
//
$manager = new QueriesManager($data->{'type'},$data->{'dataPutRequest'},$data->{'resultNumber'},$data->{'section'});