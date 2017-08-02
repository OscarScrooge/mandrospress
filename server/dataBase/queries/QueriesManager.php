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
include './Select.php';
include './Delete.php';

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
    private $condition;
    private $conn;

    /**
     * QueriesManager constructor.
     * @param $type
     * @param $dataPutRequest
     * @param $resultNumber
     * @param $section
     * @param $condition
     */
    function __construct($type,$dataPutRequest,$resultNumber,$section,$condition)
    {

        $this->type=$type;
        $this->dataPutRequest=$dataPutRequest;
        $this->resultNumber=$resultNumber;
        $this->section=$section;
        $this->condition=$condition;
        $this->dbconnection();

        switch (strtolower($type)){

            case 'insert':
                $this->insert(strtolower($this->getType()),
                    strtolower($this->getDataPutRequest()),
                    strtolower($this->getResultNumber()),
                    strtolower($this->getSection()));
                break;
            case 'select':
                $this->select(strtolower($this->getType()),
                    strtolower($this->getDataPutRequest()),
                    strtolower($this->getResultNumber()),
                    strtolower($this->getSection()),
                    strtolower($this->getCondition()));
                break;
            case 'delete':
                $this->delete(strtolower($this->getType()),
                    strtolower($this->getDataPutRequest()),
                    strtolower($this->getResultNumber()),
                    strtolower($this->getSection()),
                    strtolower($this->getCondition()));
                break;
            default:
                echo "Defaul Case";
                break;

        }



    }

    /**
     * @param $type
     * @param $dataPutRequest
     * @param $resultNumber
     * @param $section
     */
    private function insert($type,$dataPutRequest,$resultNumber,$section){
        $insert = new Insert($type,$dataPutRequest,$resultNumber,$section,$this->getConn());
    }

    /**
     * @param $type
     * @param $dataPutRequest
     * @param $resultNumber
     * @param $section
     * @param $condition
     */
     private function select($type,$dataPutRequest,$resultNumber,$section,$condition){
        $select = new Select($type,$dataPutRequest,$resultNumber,$section,$condition,$this->getConn());
    }

    /**
     * @param $type
     * @param $dataPutRequest
     * @param $resultNumber
     * @param $section
     * @param $condition
     */
    private function delete($type,$dataPutRequest,$resultNumber,$section,$condition){
        $delete = new Delete($type,$dataPutRequest,$resultNumber,$section,$condition,$this->getConn());
    }

    private function  dbconnection(){
        $this->conn=new ConnectionDB("localhost","mysql","mandmin","madmin","madmin@314159265");
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

    /**
     * @return mixed
     */
    public function getCondition()
    {
        return $this->condition;
    }



}
$getData = file_get_contents("php://input");
$data= json_decode($getData);
//
$manager = new QueriesManager(
    $data->{'type'},
    $data->{'dataPutRequest'},
    $data->{'resultNumber'},
    $data->{'section'},
    $data->{'condition'}
    );