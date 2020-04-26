let meals = [
  {
    ingredients:
      "cerdo, arroz, frijoles, platano maduro frito, encebollado y salsa de tomate picante",
    description: "platillo de cerdo asado, perfecto para una tarde de verano",
    name: "plato de cerdo asado",
    src: "./img/chancho.jpg"
  },
  {
    ingredients: "arroz, chorizo, chicharos, zanahoria, maiz y pollo",
    description: "receta tipica nicaragüense, perfecta para eventos especiales",
    name: "arroz a la valenciana",
    src: "./img/arroz_a_la_valenciana.jpg"
  },
  {
    ingredients:
      "carne, arroz, frijoles, platano maduro frito, encebollado y salsa de tomate picante",
    description: "platillo de carne asada, perfecto para una tarde de verano",
    name: "plato de carne asada",
    src: "./img/carne.jpg"
  },
  {
    ingredients: "pollo, lechuga y tomate",
    description: "pollo frito, perfecto para eventos especiales",
    name: "pollo frito",
    src: "./img/pollo.jpg"
  },
  {
    ingredients: "pollo, tomate, pimiento verde, tortilla, ensalada y crema",
    description:
      "tacos de pollo tipicos nicaragüenses con su ensalada y su crema",
    name: "tacos de pollo tipicos nicaragüenses",
    src: "./img/tacos2.jpg"
  },
  {
    ingredients:
      "costilla de cerdo, arroz, frijoles, platano maduro frito, encebollado y salsa de tomate picante",
    description:
      "platillo de costilla de cerdo asada, perfecto para una tarde de verano",
    name: "plato de costilla de cerdo asada",
    src: "./img/costilla.jpg"
  },
  {
    ingredients:
      "pescado frito, arroz, tostones, encebollado y salsa de tomate picante",
    description: "platillo de pescado frito, como lo comerias en la playa",
    name: "platillo de pescado frito",
    src: "./img/pescado.jpg"
  }
];

// Javascript for the food section
const foodList = document.getElementById("foodList");
const foodNames = [];
const foodImgs = [];
const foodIngredients = [];

for (let i = 0; i < meals.length; i++) {
  //  get name data and push it into an array
  foodNames.push(meals[i].name);
  //  get image data and push it into an array
  foodImgs.push(meals[i].src);
  //  get ingredients data and push it into an array
  foodIngredients.push(meals[i].ingredients);
}

function createFoodItem() {
  for (let i = 0; i < foodNames.length; i++) {
    let li = document.createElement("li");
    li.className = "meal";
    li.onmouseover = function showDesc() {
      div.style.display = "block";
      h4.style.color = "white";
      li.style.background = "rgb(2, 83, 126)";
    };
    li.onmouseout = function hideDesc() {
      div.style.display = "none";
      h4.style.color = "rgb(2, 83, 126)";
      li.style.background = "white";
    };

    // create an h4 with the name of the meals
    let h4 = document.createElement("h4");
    h4.innerHTML = foodNames[i];
    li.append(h4);

    // create an image for every li
    let img = document.createElement("img");
    img.id = "mealImg";
    img.src = foodImgs[i];
    img.alt = foodNames[i];
    li.append(img);

    // create a p including the ingredients of every meal
    let div = document.createElement("div");
    div.id = "ingredients";
    let p = document.createElement("p");
    p.innerHTML = `Este plato contiene ${foodIngredients[i]}.`;
    div.append(p);
    li.append(div);

    // add all new created elements into li
    foodList.append(li);
  }
}

createFoodItem();
