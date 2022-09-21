charactersInfo = [
	{
	  name: "Xiao",
	  image: "Xiao.png",
	  element: "Anemo",
	  weapon: "Polearm",
	  star: 5,
	},
	{
	  name: "Beidou",
	  image: "Beidou.png",
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
	  name: "Childe",
	  image: "Childe.png",
	  element: "Hydro",
	  weapon: "Bow",
	  star: 5,
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
	  name: "Yae Miko",
	  image: "YaeMiko.png",
	  element: "Electro",
	  weapon: "Catalyst",
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
	  name: "Diluc",
	  image: "Diluc.png",
	  element: "Pyro",
	  weapon: "Claymore",
	  star: 5,
	},
	{
	  name: "Eula",
	  image: "Eula.png",
	  element: "Cryo",
	  weapon: "Claymore",
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
	  name: "Qiqi",
	  image: "Qiqi.png",
	  element: "Cryo",
	  weapon: "Sword",
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
	  name: "Raiden",
	  image: "Raiden.png",
	  element: "Electro",
	  weapon: "Polearm",
	  star: 5,
	},
	{
	  name: "Zhongli",
	  image: "Zhongli.png",
	  element: "Geo",
	  weapon: "Polearm",
	  star: 5,
	},
  ];
   /* MY PROJECT GAME */
  $(document).ready(function () {
	/* Generate Prompt */
  
	var elements = ["Pyro", "Hydro", "Electro", "Anemo", "Geo", "Cryo"];
	var elementImages = [
	  "Element_Pyro.png",
	  "Element_Hydro.png",
	  "Element_Electro.png",
	  "Element_Anemo.png",
	  "Element_Geo.png",
	  "Element_Cryo.png",
	];
	let elementId = 0;
	$(".prompt").append(
	  `<h2> Find all ` +
		elements[elementId] +
		`</h2>` +
		`<img src="Images/general stuff/` +
		elementImages[elementId] +
		`" alt="">` +
		`<h2> characters</h2>`
	);
  
	/* Generate Grid */
  
	var k = Math.floor(Math.random() * 11);
	let elementsCount = [0, 0, 0, 0, 0, 0];
  
	for (i = 0; i < 16; i++) {
	  var id = i + k;
	  $(".grid-cont").append(
		`<div class="grid-item"` +
		  `id="` +
		  id +
		  `">
			<img src="Images/Character Icons/` +
		  charactersInfo[id].image +
		  `" alt="">
	  </div>`
	  );
	  switch (charactersInfo[id].element) {
		case "Pyro":
		  elementsCount[0]++;
		  break;
		case "Hydro":
		  elementsCount[1]++;
		  break;
		case "Electro":
		  elementsCount[2]++;
		  break;
		case "Anemo":
		  elementsCount[3]++;
		  break;
		case "Geo":
		  elementsCount[4]++;
		  break;
		case "Cryo":
		  elementsCount[5]++;
		  break;
	  }
	}
	//when page loads
  
	$(".grid-cont").css("grid-template-columns", "auto auto auto auto");
	let myElementsCount = [0, 0, 0, 0, 0, 0];
  
	var score = 0;
	$(".grid-item").click(function () {
	  var selectedId = this.id;
	  if (charactersInfo[selectedId].element == elements[elementId]) {
		$("#" + selectedId + " img").attr(
		  "src",
		  "Images/general stuff/" + elementImages[elementId]
		);
		score += 10;
		$("#score").text("Score: " + score);
		myElementsCount[elementId]++;
		if (myElementsCount[elementId] == elementsCount[elementId] && elementsCount[elementId]!=0) {
	 
			elementId++;
		 
		  $(".prompt").html(
			`<h2> Find all ` +
			  elements[elementId] +
			  `</h2>` +
			  `<img src="Images/general stuff/` +
			  elementImages[elementId] +
			  `" alt="">` +
			  `<h2> characters</h2>`
		  );
		}
		
	  }
	  console.log(score);
	  if (score == 160){
		  $("h2").remove()
		  $(".grid-cont").html("<h1> WIN!!! </h1>")
		  $(".grid-cont").css({"height":"400px",'background-image':'url("Images/confetti-10.gif")'});
  
	  }
	});
	
	
  
  });
  