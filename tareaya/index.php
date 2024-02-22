<?php
require_once '/xampp/htdocs/S19---Hackaton-F5-Globant-/tareaya/config/database.php';



use Config\Database;


$database = new Database();
$database->connect();


function getAdds()
{
  global $database;
  $stmt = $database->connect()->prepare('SELECT * FROM anuncios');

  return ($stmt->execute()) ? $stmt->fetchAll(PDO::FETCH_ASSOC) : false;
}




$anuncios = getAdds();
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

  <div>
    <?php if ($anuncios)
      foreach ($anuncios as $anuncio) : ?>
      <h3><?= $anuncio['anuncianteID']; ?></h3>
      <p><?= $anuncio['texto-anuncio']; ?></p>
    <?php endforeach; ?>
  </div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>