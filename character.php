<?php 
    require 'info.php';
    if(isset($_GET)){
      extract($_GET);
      $bg = $chBio[$name]["region"] . "Bg" . $chBio[$name]["element"];
    }?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/eula.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <script src="scripts/jquery-3.6.0.min.js"></script>

    <title>Genshin | Ultimate Character Ascension Guide</title>
  </head>
  <style>
    .monthlyBanner {
    background-image: url("Images/general stuff/Bg/<?php echo $bg; ?>.png");
  }
  .character-banner .char img:nth-of-type(1),  .character-banner .char img:nth-of-type(2) {
    background-image: url("Images/general stuff/Background_Item_<?php echo $chBio[$name]["star"];?>_Star.webp");
  }
  </style>
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

   

    <!--Banner-->
    <div class="monthlyBanner">
      <div class="flex">
        <img
          src="Images/Character Icons/Wish/Character_<?php echo $name; ?>_Full_Wish1.png"
          alt=""
          id="currentBannerCharacter"
        />
        <div class="characterNamecard">
         
          <img
            class="currentElement"
            src="Images/general stuff/Element_<?php echo $chBio[$name]["element"]; ?>Glow.png"
            alt=""
          />
          <h2><?php echo implode(" ",explode("_",$name)); ?></h2>
          <div class="characterNamecardBg">
            <div class="characterNamecardStars flex">
              <?php 
              $star = $chBio[$name]["star"];
              for($i = 0; $i < $star; $i++){
                echo "<img src='Images/general stuff/Icon_1_Star.webp' alt='' />";
              }
?>
            </div>
          </div>
        </div>
        <h1><?php echo $chBio[$name]["alias"]; ?></h1>
      </div>
    </div>
    <!-- CHARACTER INFO -->
      <div class="parentShowcase">
        <!-- PROFILE-->
        <div class="showcase">
          <div class="character-banner">
            <div class="char flex">
              <img src="Images/Character Icons/<?php echo $name; ?>.png" alt="" />
              <img src="Images/general stuff/Element_<?php echo $chBio[$name]["element"]; ?>Glow.png" alt="" />
            </div>
              <h2><?php echo implode(" ",explode("_",$name)); ?></h2>
            <div class="Estars flex">
            <?php 
              $star = $chBio[$name]["star"];
              for($i = 0; $i < $star; $i++){
                echo "<img src='Images/general stuff/Icon_1_Star.webp' alt='' />";
              }?>
            </div>
            <h2 class="ewh2 label"><?php echo $chBio[$name]["weapon"]?></h2>
            <div class="characterBio">
                  <div class="label">Name/Alias</div><div class="value"><?php echo $chBio[$name]["fullName"];?></div>
                  <div class="label">Birthday</div><div class="value"><?php echo $chBio2[$name]["bd"]; ?></div>
                  <div class="label">Region</div><div class="value"><?php echo $chBio[$name]["region"];?></div> 
                  <div class="label">MBTI</div><div class="value"><?php echo $chBio2[$name]["mbti"]; ?></div> 
                  <div class="label">Zodiac Sign </div><div class="value"><?php echo $chBio2[$name]["zodiac"]; ?></div> 
            </div>
          </div>
        </div>

        <!--Character Ascension Menu-->
        <div class="showcase">
          <nav class="ascensionMenu flex">
            <button  title="lvl" onclick="" class="stat flex selected" id="lvl">
              <img src="Images/general stuff/Item_Heros_Wit.webp" alt="">
                <span> Level</span>
             </button>
            <button title="talents" onclick="" class="stat flex" id="talents">
              <img src="Images/Material icons/Item_Guide_to_Resistance.webp" alt="">
              <span> Talents</span>
             </button>
            <button title="artifacts" onclick="" class="stat flex" id="artifacts">
              <img src="Images/artifacts/Item_Stainless_Bloom.webp" alt="">
              <span>Artifacts</span>
              
            </button>
            <button title="weapons" onclick="" class="stat flex" id="weapons">
              <img src="Images/Weapon icons/Claymore png/Weapon_Song_of_Broken_Pines_2nd.png" alt="">
              <span> Weapons</span>
             </button>
            <button title="constellation" onclick="" class="stat flex" id="constellation">
              <img src="Images/general stuff/Item_Stella_Fortuna_5.webp" alt="">
              <span> Constellation</span>
             </button>
          </nav>

          
        </div>
       
        
      



  </body>
  <script src="scripts/character.js"></script>
</html>
