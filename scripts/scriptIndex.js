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
var characterGrid = document.querySelector(".grid-cont");
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
