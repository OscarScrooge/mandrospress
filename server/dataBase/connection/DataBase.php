<?php
/**
 * Created by IntelliJ IDEA.
 * User: oscar
 * Date: 7/28/17
 * Time: 2:29 PM
 */
header('Access-Control-Allow-Origin: *');

interface DataBase{

    /**
     * @param $host
     * @param $manager
     * @param $dbName
     * @param $username
     * @param $password
     * @return mixed
     */
    public function connect($host,$manager,$dbName,$username,$password);

}