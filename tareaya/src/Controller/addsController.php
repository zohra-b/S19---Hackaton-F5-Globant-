<?php

namespace Controller;

use Model\addsModel;

class addsController
{
    private $model;

    public function __construct()
    {
        $this->model = new addsModel;
    }

    public function getAdds(){
        return ($this->model->getAdds())? $this->model->getAdds() : 'No hay libros en la base de datos';
    }
}
