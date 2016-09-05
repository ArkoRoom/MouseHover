<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mouse Hover</title>
    <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <div class="container">
      <div class="use-advice">
        <h2>Mouse Hover</h2>
        <p>
          Mouse Hover est un petit script qui permets de révéler une image en passant simplement son curseur sur la zone.<br>
          Des petits carrés se forment alors permettant de révéler tout ou partie de l'image selon votre souhait.<br>
          L'image est générée grâce à une variable aléatoire.
        </p>
      </div>
      <div class="col-md-10 col-md-offset-1">
        <div class="wrap-img">
          <div class="container-div">

          </div>
        </div>
      </div>
      <input type="button" class="btn btn-default delete-div" name="name" value="Supprimer un carré">
    </div>

    <script src="vendor/jquery/dist/jquery.min.js" charset="utf-8"></script>
    <script src="vendor/bootstrap/dist/js/bootstrap.min.js" charset="utf-8"></script>
    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>
