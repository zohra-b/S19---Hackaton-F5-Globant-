<?php
require_once '/xampp/htdocs/S19---Hackaton-F5-Globant-/tareaya/config/database.php';



use Config\Database;


$database = new Database();


function getUsers()
{
  global $database;

  $users = $database->connect()->prepare("SELECT * FROM anunciante");
  return ($users->execute()) ? $users->fetchAll(PDO::FETCH_ASSOC) : false;
}
// $usersList = getUsers();
// print_r($usersList);

function login()
{
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["email"]) && isset($_POST["password"])) {
      $loggedUser = $_POST["email"];
      $loggedPass = $_POST["password"];

      $users = getUsers();

      foreach ($users as $user) {
        if ($loggedUser == $user["email"] && $loggedPass == $user["contrasena"]) {
          session_start();
          $_SESSION['user'] = $loggedUser;
          header('Location: index.php');
          exit();
        }
        //echo "<script> alert ('*****************BIEN JOUE **************'); </script>";

      }
      echo "<script> alert ('Usuario o contraseña incorrectos! Intente de nuevo.'); </script>";
    }
  }
}
login();

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

  <form action="" method="post">
    <label for="email" class="me-2">Usuario:</label>
    <input type="text" name="email">
    <label for="password">Contraseña:</label>
    <input type="password" name="password">
    <button type="submit">Iniciar sesión</button>
  </form>

  <div>
    <?php if ($anuncios)
      foreach ($anuncios as $anuncio) : ?>
      <h3><?= $anuncio['nombre']; ?></h3>
      <h4><?= $anuncio['categoria']; ?></h4>
      <p><?= $anuncio['texto-anuncio']; ?></p>
      <p><?= $anuncio['precio']; ?>€/hora</p>
      <p><b>Móvil :</b> <?= $anuncio['movil'] ?></p>
      <p><b>E-mail : </b> <?= $anuncio['mail'] ?></p>
    <?php endforeach; ?>
  </div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>