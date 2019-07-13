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
    src: "./img/tacos.jpg"
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

const foodList = document.getElementById("foodList");
const foodNames = [];
const foodImgs = [];

//   get name data and push it into an array
for (let i = 0; i < meals.length; i++) {
  foodNames.push(meals[i].name);
}

//  get image data and push it into an array
for (let i = 0; i < meals.length; i++) {
  foodImgs.push(meals[i].src);
}

function createFoodItem() {
  for (let i = 0; i < foodNames.length; i++) {
    const li = document.createElement("li");
    li.className = "meal";

    // create an image for every li
    const img = document.createElement("img");
    img.src = foodImgs[i];
    img.alt = foodNames[i];
    li.append(img);

    // create an h2 with the name of the meals
    const h2 = document.createElement("h2");
    h2.innerHTML = foodNames[i];
    li.append(h2);

    // add all new created elements into li
    foodList.append(li);
  }
}

createFoodItem();
