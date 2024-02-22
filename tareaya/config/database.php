<?php

namespace Config;


use PDO;
use PDOException;

class Database
{
    //parametros db
    private $host = 'localhost';
    private $db_name = 'tareaya';
    private $username = 'root';
    private $password = '';
    private $conn;




    // private $host;
    // private $db_name;
    // private $username;
    // private $password;
    // private $conn;

    //constructor
    // public function __construct()
    // {
    //     $env=parse_ini_file(__DIR__ .'../env'); 

    //     $this ->host= $env['DDBB_HOST'];
    //     $this ->db_name =$env['DDBB_NAME'];
    //     $this -> username=$env['DDBB_USER'];
    //     $this -> password=$env['DDBB_PASSWORD'];
    // }

    //conexion db
    public function connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            if ($this->conn) {
                echo "Connected !";
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

        return $this->conn;
    }
}
