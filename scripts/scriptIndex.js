/*Monthly Banner*/
var characters = [
  "Nilou",
  "Albedo",
  "Beidou",
];
var backgrounds = ["SumeruBgHydro.png", "MondstadtBgGeo.png", "LiyueBgElectro.png"];
var h2s = ["Nilou", "Albedo", "Beidou"];
var h1s = [
  "Dance of LotusLight",
  "Kreideprinz",
  "Uncrowned Lord of the Ocean"
];
var elements = [
  "Element_HydroGlow.png",
  "Element_GeoGlow.png",
  "Element_ElectroGlow.png",
];

function changeBanner(ind) {
  var character = document.querySelector("#currentBannerCharacter");
  var background = document.querySelector(".monthlyBanner");
  var h1 = document.querySelector(".monthlyBanner h1");
  var h2 = document.querySelector(" .characterNamecard h2 ");
  var element = document.querySelector(".currentElement");
  var star = document.querySelector(".lastStar");

  for (i = 0; i < 3; i++) {
    var selectionImg = document.querySelector("#" + CSS.escape(i) + " img");
    var selectedImgSpan = document.querySelector("#" + CSS.escape(i) + " .dot");
    if (i == ind) {
      selectionImg.style.borderBottom = "0.4vw #89d2fc solid";
      selectedImgSpan.style.visibility = "visible";
    } else {
      selectedImgSpan.style.visibility = "hidden";
      selectionImg.style.borderBottom = "none";
    }
  }

  character.src = "Images/Character Icons/Wish/CharaCter_" + characters[ind]+"_Full_Wish1.png";
  element.src = "Images/general stuff/" + elements[ind];
  background.style.backgroundImage =
    "url('Images/general stuff/Bg/" + backgrounds[ind] + "')";

  h1.innerHTML = h1s[ind];
  h2.innerHTML = h2s[ind];
  if (ind != 0) {
    star.style.visibility = "hidden";
  } else star.style.visibility = "visible";
}

/* Grid Characters */

let charactersInfo = [
  {
    name: "Albedo",
    image: "Albedo.png",
    element: "Geo",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Aloy",
    image: "Aloy.png",
    element: "Cryo",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Amber",
    image: "Amber.png",
    element: "Pyro",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Ayaka",
    image: "Ayaka.png",
    element: "Cryo",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Ayato",
    image: "Ayato.png",
    element: "Hydro",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Barbara",
    image: "Barbara.png",
    element: "Hydro",
    weapon: "Catalyst",
    star: 4,
  },
  {
    name: "Beidou",
    image: "Beidou.png",
    element: "Electro",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Bennett",
    image: "Bennett.png",
    element: "Pyro",
    weapon: "Sword",
    star: 4,
  },
  {
    name: "Candace",
    image: "Candace.png",
    element: "Hydro",
    weapon: "Polearm",
    star: 4,
  },
  {
    name: "Childe",
    image: "Childe.png",
    element: "Hydro",
    weapon: "Bow",
    star: 5,
  },
  {
    name: "Chongyun",
    image: "Chongyun.png",
    element: "Cryo",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Collei",
    image: "Collei.png",
    element: "Dendro",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Cyno",
    image: "Cyno.png",
    element: "Electro",
    weapon: "Polearm",
    star: 5,
  },
  {
    name: "Diluc",
    image: "Diluc.png",
    element: "Pyro",
    weapon: "Claymore",
    star: 5,
  },
  {
    name: "Diona",
    image: "Diona.png",
    element: "Cryo",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Dori",
    image: "Dori.png",
    element: "Electro",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Eula",
    image: "Eula.png",
    element: "Cryo",
    weapon: "Claymore",
    star: 5,
  },
  {
    name: "Fischl",
    image: "Fischl.png",
    element: "Electro",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Ganyu",
    image: "Ganyu.png",
    element: "Cryo",
    weapon: "Bow",
    star: 5,
  },
  {
    name: "Gorou",
    image: "Gorou.png",
    element: "Geo",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Heizou",
    image: "Heizou.png",
    element: "Anemo",
    weapon: "Catalyst",
    star: 4,
  },
  {
    name: "Hu Tao",
    image: "HuTao.png",
    element: "Pyro",
    weapon: "Polearm",
    star: 5,
  },
  {
    name: "Itto",
    image: "Itto.png",
    element: "Geo",
    weapon: "Claymore",
    star: 5,
  },
  {
    name: "Jean",
    image: "Jean.png",
    element: "Anemo",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Kaeya",
    image: "Kaeya.png",
    element: "Cryo",
    weapon: "Sword",
    star: 4,
  },
  {
    name: "Kazuha",
    image: "Kazuha.png",
    element: "Anemo",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Keqing",
    image: "Keqing.png",
    element: "Electro",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Klee",
    image: "Klee.png",
    element: "Pyro",
    weapon: "Catalyst",
    star: 5,
  },
  {
    name: "Kokomi",
    image: "Kokomi.png",
    element: "Hydro",
    weapon: "Catalyst",
    star: 5,
  },
  {
    name: "Kuki Shinobu",
    image: "Kuki.png",
    element: "Electro",
    weapon: "Sword",
    star: 4,
  },
  {
    name: "Lisa",
    image: "Lisa.png",
    element: "Electro",
    weapon: "Catalyst",
    star: 4,
  },
  {
    name: "Mona",
    image: "Mona.png",
    element: "Hydro",
    weapon: "Catalyst",
    star: 5,
  },
  {
    name: "Nilou",
    image: "Nilou.png",
    element: "Hydro",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Ningguang",
    image: "Ningguang.png",
    element: "Geo",
    weapon: "Catalyst",
    star: 4,
  },
  {
    name: "Noelle",
    image: "Noelle.png",
    element: "Geo",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Qiqi",
    image: "Qiqi.png",
    element: "Cryo",
    weapon: "Sword",
    star: 5,
  },
  {
    name: "Raiden",
    image: "Raiden.png",
    element: "Electro",
    weapon: "Polearm",
    star: 5,
  },
  {
    name: "Razor",
    image: "Razor.png",
    element: "Electro",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Rosaria",
    image: "Rosaria.png",
    element: "Cryo",
    weapon: "Polearm",
    star: 4,
  },
  {
    name: "Sara",
    image: "Sara.png",
    element: "Electro",
    weapon: "Bow",
    star: 4,
  },
  {
    name: "Sayu",
    image: "Sayu.png",
    element: "Anemo",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Shenhe",
    image: "Shenhe.png",
    element: "Cryo",
    weapon: "Polearm",
    star: 5,
  },
  {
    name: "Sucrose",
    image: "Sucrose.png",
    element: "Anemo",
    weapon: "Catalyst",
    star: 4,
  },
  {
    name: "Thoma",
    image: "Thoma.png",
    element: "Pyro",
    weapon: "Polearm",
    star: 4,
  },
  {
    name: "Tighnari",
    image: "Tighnari.png",
    element: "Dendro",
    weapon: "Bow",
    star: 5,
  },
  {
    name: "Venti",
    image: "Venti.png",
    element: "Anemo",
    weapon: "Bow",
    star: 5,
  },
  {
    name: "Xiangling",
    image: "Xiangling.png",
    element: "Pyro",
    weapon: "Polearm",
    star: 4,
  },
  {
    name: "Xiao",
    image: "Xiao.png",
    element: "Anemo",
    weapon: "Polearm",
    star: 5,
  },
  {
    name: "Xingqiu",
    image: "Xingqiu.png",
    element: "Hydro",
    weapon: "Sword",
    star: 4,
  },
  {
    name: "Xinyan",
    image: "Xinyan.png",
    element: "Pyro",
    weapon: "Claymore",
    star: 4,
  },
  {
    name: "Yae Miko",
    image: "YaeMiko.png",
    element: "Electro",
    weapon: "Catalyst",
    star: 5,
  },
  {
    name: "Yanfei",
    image: "Yanfei.png",
    element: "Pyro",
    weapon: "Catalyst",
    star: 4,
  },
  {
    name: "Yelan",
    image: "Yelan.png",
    element: "Hydro",
    weapon: "Bow",
    star: 5,
  },
  {
    name: "Yoimiya",
    image: "Yoimiya.png",
    element: "Pyro",
    weapon: "Bow",
    star: 5,
  },
  {
    name: "Yun Jin",
    image: "YunJin.png",
    element: "Geo",
    weapon: "Polearm",
    star: 4,
  },
  {
    name: "Zhongli",
    image: "Zhongli.png",
    element: "Geo",
    weapon: "Polearm",
    star: 5,
  },
];

var characterGrid = document.querySelector(".grid-cont");
for (i = 0; i < charactersInfo.length; i++) {
  if (charactersInfo[i].star == 4) {
    characterGrid.innerHTML +=
      `<div class="grid-item">
  <a href=character.php?name="`+charactersInfo[i].name  +`>
      <img style="background-image:url( 'Images/general stuff/Background_Item_4_Star.webp');" src="Images/Character Icons/` +
      charactersInfo[i].image +
      `" alt="">
     <img style="background-image:url( 'Images/general stuff/Background_Item_4_Star.webp');" src="Images/general stuff/Element_` +
      charactersInfo[i].element +
      `.png" alt="">
      <h2>` +
      charactersInfo[i].name +
      `</h2>
  </a>
</div>`;
  }
    else if(charactersInfo[i].star == 5){
      characterGrid.innerHTML +=
      `<div class="grid-item">
      <a href=character.php?name="`+charactersInfo[i].name  +`>
      <img src="Images/Character Icons/` +
      charactersInfo[i].image +
      `" alt="">
     <img src="Images/general stuff/Element_` +
      charactersInfo[i].element +
      `.png" alt="">
      <h2>` +
      charactersInfo[i].name +
      `</h2>
  </a>
</div>`;
    }
    
  
}

//when page loads

var numOfCols = Math.floor(($(window).width() * 0.7) / 126);
gridTemplColStyle = "";
for (i = 0; i < numOfCols; i++) {
  gridTemplColStyle += "auto ";
}
characterGrid.style.gridTemplateColumns = gridTemplColStyle;

//on window resize
$(window).resize(function () {
  var characterGrid = document.querySelector(".grid-cont");
  var numOfCols = Math.floor(($(window).width() * 0.8) / 126);
  gridTemplColStyle = "";
  for (i = 0; i < numOfCols; i++) {
    gridTemplColStyle += "auto ";
  }
  characterGrid.style.gridTemplateColumns = gridTemplColStyle;
});

// Form



function validateForm() {
  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const success = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");

  let errorFlag = false;

  clearMessages();
  if (nameInput.value == "") {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if(!emailIsValid(email.value))
  {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if(message.value == "")
  {
    errorNodes[2].innerText = "Please enter a message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if(!errorFlag)
  {
    success.innerText="Success!";
  }

}

function clearMessages(){
  const nameInput = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const success = document.querySelector("#success");
  const errorNodes = document.querySelectorAll(".error");
  for(i = 0; i < 3; i++){
    errorNodes[i].innerText = "";   
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email){
  let pattern= /\S+@\S+\.\S+/;
  return pattern.test(email);
}
