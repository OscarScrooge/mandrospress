
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
    private $fields;

    /**
     * Insert constructor.
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $connectionDB
     */
    function __construct($type,$dataPut,$resultNumber,$section,$connectionDB,$fields)
    {
        $this->type = $type;
        $this->dataPut = $dataPut;
        $this->resultNumber = $resultNumber;
        $this->section = $section;
        $this->fields=$fields;
        $this->connectionDB = $connectionDB;

        $this->doQuery($this->getType(),
            $this->getDataPut(),
            $this->getResultNumber(),
            $this->getSection(),
            $this->getConnectionDB(),
            $this->getFields()
        );

    }

    /**
     * @param $type
     * @param $dataPut
     * @param $resultNumber
     * @param $section
     * @param $conn
     */
    private function doQuery($type,$dataPut,$resultNumber,$section,$conn,$fields){

        $pieces = explode(",", $dataPut);
        $insertValues = $this->getMarkQuestionValues($dataPut,$pieces);

        $query= "insert into mandmin.".$section.' ('.$fields.') '." values (".$insertValues.")";
         echo $query;

        $i=1;
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
     * @param $dataPut
     * @param $pieces
     * @return string
     */
    private function getMarkQuestionValues($dataPut,$pieces){


        $insertValues="";

        for($k=0;$k<sizeof($pieces);$k++){
            $insertValues.="?,";
        }

        $insertValues= substr( $insertValues , 0 , -1);

        return $insertValues;
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
    public function getFields()
    {
        return $this->fields;
    }




}