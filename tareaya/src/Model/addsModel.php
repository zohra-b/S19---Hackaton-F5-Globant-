<?php

namespace Model;

// require_once '/xampp/htdocs/S19---Hackaton-F5-Globant-/tareaya/config/database.php';

use PDO;
use Config\Database;

class addsModel
{
    private $PDO;

    public function  __construct()
    {
        $connect_db = new Database();
        $this->PDO = $connect_db -> connect();
    }

    public function getAdds(){
        $query= "SELECT * FROM anuncios";
        $stmt= $this -> PDO -> prepare($query);
        
        return ($stmt->execute()) ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
    }


}
