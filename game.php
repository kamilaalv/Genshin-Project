<!-- PROJECT GAME-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="css/style.css" />
    <script src="scripts/jquery-3.6.0.min.js"></script>
    <script src="scripts/game.js"></script>
   <!--<script src="scripts/scriptIndex.js"></script>--> 
    <title>Genshin | Ultimate Character Ascension Guide</title>
  </head>
  <body>
    <style>
      .grid-cont {
        display: grid;
        padding: 10px;
      }
      .grid-item {
        padding: 0 4px;
        position: relative;
      }

      .grid-item img {
        background-image: url("Images/general stuff/Background_Item_3_Star.webp");
        border-radius: 4px;

        height: 150px;
        border: 1px solid rgb(68, 68, 68);
        box-shadow: 0 3px 6px rgb(0 0 0 / 23%), 0 3px 6px rgb(0 0 0 / 16%);
        transition: box-shadow 0.3s;
      }
      .grid-item:hover {
        transform: scale(1.05);
        transition: transform 0.1s ease-in;
        color: rgb(230, 230, 230);
      }
      .gameCard {
        width: 760px;
        background-color: rgb(56, 56, 56);
        border-radius: 20px;
        box-shadow: 0 px 6px rgb(0 0 0 / 23%), 0 3px 6px rgb(0 0 0 / 16%);
        transition: box-shadow 0.3s;
        padding:40px;
      }
      .Task.flex {
        max-width: 800px;
      }
      .Task.flex h2#score {
        margin-left: 4.5vw;
      }
      .prompt img {
        width: 30px;
        margin: 0 7px;
      }
    </style>

    <!--Logo-->
    <div class="logo flex">
      <img src="./Images/Genshin_Impact_logo_white.png" alt="logo" />
    </div>

    <!--Navbar-->
    <div class="navbar">
      <div class="container flex">
        <nav>
          <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="characters.php">Characters</a></li>
            <li><a href="game.php">Game</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="flex">
        <div class="gameCard">
            <div class="flex Task">
              <div class="flex prompt"></div>
              <h2 id="score">Score:</h2>
            </div>
            <div class="flex grid-cont"></div>
          </div>
    </div>
    
  </body>
 
 
</html>
