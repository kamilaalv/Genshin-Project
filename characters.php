<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
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
  <body>
    <style>
      .nav {
        background-color: rgb(43, 43, 43);
      }

     
      /* Filters */

      .side-bar {
        background: rgba(48, 48, 48, 0.4);
        backdrop-filter: blur(15px);
        width: 290px;
        height: 100%;
        position: absolute;
        z-index: 3;
        top: 0;
        left: -100%;
        overflow-y: auto;
        transition: 0.6s ease;
        transition-property: left;
      }

      .side-bar.active {
        left: 0;
      }

      .side-bar .menu {
        width: 100%;
        margin-top: 80px;
      }

      .side-bar .menu .item {
        position: relative;
        cursor: pointer;
      }

      .side-bar .menu .item a {
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        display: block;
        padding: 5px 30px;
        line-height: 60px;
      }

      .side-bar .menu .item a:hover {
        background: #5e5e5e;
        transition: 0.3s ease;
      }

      .side-bar .menu .item i {
        margin-right: 15px;
      }

      .side-bar .menu .item a .dropdown {
        position: absolute;
        right: 0;
        margin: 20px;
        transition: 0.3s ease;
      }

      .side-bar .menu .item .sub-menu {
        background: rgba(48, 48, 48, 0.5);
        display: none;
      }

      .side-bar .menu .item .sub-menu a {
        padding-left: 80px;
      }

      .rotate {
        transform: rotate(90deg);
      }

      .close-btn {
        position: absolute;
        color: #fff;
        font-size: 20px;
        right: 0;
        margin: 25px;
        cursor: pointer;
      }

      .menu-btn {
        color: #fff;
        font-size: 20px;
        margin: 25px;
        cursor: pointer;
      }

      .menu h1 {
        color: rgb(255, 255, 255);
        font-size: 2rem;
        text-align: center;
        line-height: 80px;
        border-bottom: 1.5px solid white;
      }

      @media (max-width: 900px) {
        .main h1 {
          font-size: 40px;
          line-height: 60px;
        }
      }

      /* Parallax */
      .parallax-window {
        margin-top: 20px;
        min-height: 400px;
        background: transparent;
      }

      .pText {
        padding: 50px;
      }
      .pText p:nth-of-type(2) {
        padding-left: 40px;
        border-left: 1px solid white;
        max-width: 440px;
      }
      .pText p {
        padding: 20px;
        max-width: 400px;
      }

      /* Grid Characters and Weapon */
 .grid-cont {
    display: grid;
    background-color: var(--primary-color);
    padding: 10px;
  }
  .grid-item {
    padding: 10px;
    position: relative;
  }

  .grid-item a img:nth-of-type(1) {
    background-image: url("Images/general stuff/Background_Item_5_Star.webp");
    border-radius: 4px;

    height: 106px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 23%), 0 3px 6px rgb(0 0 0 / 16%);
    transition: box-shadow 0.3s;
  }
  .grid-item a:hover h2 {
    transform: scale(1.05);
    transition: transform 0.1s ease-in;
    color: rgb(230, 230, 230);
  }

  .grid-item a img:nth-of-type(2) {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    background-image: url("Images/general stuff/Background_Item_5_Star.webp");
    border-radius: 100px;
    padding: 3px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 23%), 0 3px 6px rgb(0 0 0 / 16%);
  }

  .grid-item a h2 {
    text-align: center;
    color: white;
    font-weight: normal;
    font-size: 1rem;
  }

    </style>

    <!--Logo-->
    <div class="logo flex">
      <img src="Images/Genshin_Impact_logo_white.png" alt="logo" />
    </div>

    <!--Navbar-->
    <div class="navbar">
      <div class="container flex nav">
        <!-- Sidebar-->
        <div class="menu-btn">
          <i class="fas fa-filter"></i>
        </div>
        <div class="side-bar">
          <div class="close-btn">
            <i class="fas fa-times"></i>
          </div>
          <div class="menu">
            <h1>Filters</h1>
            <div class="item">
              <a class="sub-btn"
                >By rarity<i class="fas fa-angle-right dropdown"></i
              ></a>
              <div class="sub-menu">
                <a href="#" class="sub-item"
                  ><input
                    class="sub-item"
                    type="checkbox"
                    id="starsCh"
                    value="4"
                  />
                  <label class="sub-item" for="4"> 4 star</label></a
                >
                <a href="#" class="sub-item"
                  ><input
                    class="sub-item"
                    type="checkbox"
                    id="starsCh"
                    value="5"
                  />
                  <label class="sub-item" for="5"> 5 star</label></a
                >
              </div>
            </div>
            <div class="item">
              <a class="sub-btn"
                >By element<i class="fas fa-angle-right dropdown"></i
              ></a>
              <div class="sub-menu">
                <a href="#" class="sub-item">
                  <input type="checkbox" id="elementCh" value="pyro" />
                  <label for="pyro"> Pyro</label></a
                >
                <a href="#" class="sub-item"
                  ><input type="checkbox" id="elementCh" value="hydro" />
                  <label for="hydro">Hydro</label></a
                >
                <a href="#" class="sub-item">
                  <input type="checkbox" id="elementCh" value="electro" />
                  <label for="electro">Electro</label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="elementCh" value="anemo" />
                  <label for="anemo">Anemo</label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="elementCh" value="cryo" />
                  <label for="cryo">Cryo</label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="elementCh" value="geo" />
                  <label for="geo">Geo</label>
                </a>
              </div>
            </div>

            <div class="item">
              <a class="sub-btn"
                >By Weapon<i class="fas fa-angle-right dropdown"></i
              ></a>
              <div class="sub-menu">
                <a href="#" class="sub-item">
                  <input type="checkbox" id="weaponCh" value="sword" />
                  <label for="sword"> Sword </label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="weaponCh" value="bow" />
                  <label for="bow">Bow </label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="weaponCh" value="polearm" />
                  <label for="polearm"> Polearm </label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="weaponCh" value="claymore" />
                  <label for="claymore"> Claymore </label>
                </a>
                <a href="#" class="sub-item">
                  <input type="checkbox" id="weaponCh" value="catalyst" />
                  <label for="catalyst"> Catalyst </label>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="characters.php">Characters</a></li>
            <li><a href="game.php">Game</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="flex grid-cont"></div>

    <!-- Parralax-->
    <div
      class="parallax-window"
      data-parallax="scroll"
      data-image-src="Images/parallax.webp"
    ></div>

    <!-- Some text -->
    <div class="pText flex">
      <p>
        An Isolated Archipelago Far East of Teyvat Overcome endless
        thunderstorms and set foot on the islands of red maple and cherry
        blossoms. On winding shores and towering cliffs, and in forests and
        mountains full of secrets, witness the Eternity pursued by Her
        Excellency, the Almighty Narukami Ogosho.
      </p>
      <p>
        Of the giant serpent that was defeated by the Electro Archon with the
        Musou no Hitotachi, only its weather-bleached remains are left today.
        Although its skull still looks up at the sky defiantly, the god is
        already dead, and so the name of "Watatsumi Omikami" is gradually being
        forgotten.
      </p>
    </div>
  </body>
  <script src="scripts/scriptIndex.js"></script>
  <script type="text/javascript">
    //sidebar margin

    //sidebars toggles
    $(document).ready(function () {
      $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle();
        $(this).find(".dropdown").toggleClass("rotate");
      });
      $(".menu-btn").click(function () {
        $(".side-bar").addClass("active");
        $(".menu-btn").css("visibility", "hidden");
      });

      $(".close-btn").click(function () {
        $(".side-bar").removeClass("active");
        $(".menu-btn").css("visibility", "visible");
      });
    });
  </script>
  <script src="scripts/parallax.js"></script>
</html>
