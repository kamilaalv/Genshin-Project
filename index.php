<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="scripts/jquery-3.6.0.min.js"></script>
    
    <title>Genshin | Ultimate Character Ascension Guide</title>
  </head>
  <body>
    <!--Logo-->
    <div class="logo flex">
      <img src="Images/Genshin_Impact_logo_white.png" alt="logo" />
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

    <!--Monthly Banner-->
    <div class="monthlyBanner">
      <div class="flex">
        <img src="Images/Character Icons/Wish/Character_Nilou_Full_Wish1.png" alt="" id="currentBannerCharacter"/>
        <div class="characterNamecard">
          <img class="currentElement" src="Images/general stuff/Element_HydroGlow.png" alt=""/>
          <h2>Nilou</h2>
          <div class="characterNamecardBg">
            <div class="characterNamecardStars flex">
              <img src="Images/general stuff/Icon_1_Star.webp" alt="" />
              <img src="Images/general stuff/Icon_1_Star.webp" alt="" />
              <img src="Images/general stuff/Icon_1_Star.webp" alt="" />
              <img src="Images/general stuff/Icon_1_Star.webp" alt="" />
              <img src="Images/general stuff/Icon_1_Star.webp" alt="" />
            </div>
          </div>
        </div>

        <h1>Dance of Lotuslight</h1>
        <nav class="flex charMenu">
          <button onclick="changeBanner(0)" id="0">
            <img src="Images/Character Icons/Character_Nilou_Side_Icon.webp" alt=""/>
            <span class="dot"></span>
          </button>
          <button onclick="changeBanner(1)" id="1">
            <img src="Images/Character Icons/Character_Albedo_Side_Icon.webp" alt="" />
            <span class="dot"></span>
          </button>
          <button onclick="changeBanner(2)" id="2">
            <img src="Images/Character Icons/Character_Beidou_Side_Icon.webp" alt=""/>
            <span class="dot"></span>
          </button>
        </nav>
      </div>
    </div>

    

    <!-- Form -->
    <div id="overlay" class="flex">
      <form onsubmit="event.preventDefault(); validateForm()"class="flex">
          <h1>Contact Me</h1>

          <label for="name">Name: </label>
          <input type="text" id="name" placeholder="Your name">
          <div class="er">
            <small class="error"></small>
          </div>
          

          <label for="email">Email: </label>
          <input type="text" id="email" placeholder="Your email">
          <div class="er">
            <small class="error"></small>
          </div>

          <label for="message">Message: </label>
          <textarea id="message" placeholder="Your message" rows="6"></textarea>
          <div class="er">
            <small class="error"></small>
          </div>

          <div>
            <input type="submit"  class="button" value="Send Message">
            <p id="success"></p>
          </div>

      </form>
    </div>

  </body>
  <script src="scripts/scriptIndex.js"></script>
</html>
