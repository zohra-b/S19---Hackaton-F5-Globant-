<?php
require_once '/xampp/htdocs/S19---Hackaton-F5-Globant-/tareaya/config/database.php';


use Config\Database;

// Créer une instance de votre classe Database
$database = new Database();

// Appeler la méthode connect()
$database->connect();
?>


<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
