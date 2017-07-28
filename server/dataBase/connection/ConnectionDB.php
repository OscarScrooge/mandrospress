<?php

/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/28/17
 * Time: 12:13 PM
 */
class ConnectionDB
{
    private $host;
    private $username;
    private $password;
    private $dbName;
    private $manager;

   function __construct($host,$manager,$dbName,$username,$password){

       $this->host = $host;
       $this->username = $username;
       $this->password = $password;
       $this->dbName = $dbName;
       $this->manager = $manager;

       $this->connect();

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



   function connect(){

       try {
           $conn = new PDO($this->getManager().":host=;".$this->getHost()."=myDB",$this->getUsername(), $this->getPassword());
           // set the PDO error mode to exception
           $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           echo "ok";
           return true;
       }
       catch(PDOException $e)
       {
           echo "Connection failed: " . $e->getMessage();
           return false;
       }

   }
}