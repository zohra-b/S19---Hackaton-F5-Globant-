<?php
require_once '/xampp/htdocs/S19---Hackaton-F5-Globant-/tareaya/config/database.php';



use Config\Database;


$database = new Database();
$database->connect();


function getAdds()
{
  global $database;
  $stmt = $database->connect()->prepare(
    'SELECT anuncios.*, anunciante.nombre AS nombre, categoria.categoria AS categoria, anunciante.movil AS movil, anunciante.email AS mail  
    FROM anuncios
    INNER JOIN anunciante ON anuncios.anuncianteID=anunciante.anuncianteID
    INNER JOIN categoria ON  anuncios.categoriaID=categoria.categoriaID'
  );

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
      <h3><?= $anuncio['nombre']; ?></h3>
      <h4><?= $anuncio['categoria']; ?></h4>
      <p><?= $anuncio['texto-anuncio']; ?></p>
      <p><b>Móvil :</b> <?= $anuncio['movil'] ?></p>
      <p><b>E-mail : </b> <?= $anuncio['mail'] ?></p>
    <?php endforeach; ?>
  </div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>