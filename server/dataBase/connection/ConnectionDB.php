<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/28/17
 * Time: 12:13 PM
 */

header('Access-Control-Allow-Origin: *');

use PDO;

include './DataBase.php';

class ConnectionDB
{
    private $host;
    private $username;
    private $password;
    private $dbName;
    private $manager;
    private $connection;

   function __construct($host,$manager,$dbName,$username,$password){

       $this->host = $host;
       $this->username = $username;
       $this->password = $password;
       $this->dbName = $dbName;
       $this->manager = $manager;

       return $this->connect($this->getHost(),$this->getManager(),$this->getDbName(),$this->getUsername(),$this->getPassword());

   }

    /**
     * @return mixed
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * @param mixed $host
     */
    public function setHost($host)
    {
        $this->host = $host;
    }

    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getDbName()
    {
        return $this->dbName;
    }

    /**
     * @param mixed $dbName
     */
    public function setDbName($dbName)
    {
        $this->dbName = $dbName;
    }

    /**
     * @return mixed
     */
    public function getManager()
    {
        return $this->manager;
    }

    /**
     * @param mixed $manager
     */
    public function setManager($manager)
    {
        $this->manager = $manager;
    }


    /**
     * @param $host
     * @param $manager
     * @param $dbName
     * @param $username
     * @param $password
     * @return mixed
     */
    public function connect($host, $manager, $dbName, $username, $password)
    {
        try {
            $this->connection = new PDO($manager.":host=".$host.";dbname=".$dbName,$username, $password);
            // set the PDO error mode to exception
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//            echo "ok connection DB";
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
            return null;
        }

    }

    /**
     * @return mixed
     */
    public function getConnection()
    {
        return $this->connection;
    }



    /**
     * @return string
     */
    public function getMessage(){
       return 'hola mensaje';
    }
}