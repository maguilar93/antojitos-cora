let desserts = [
  {
    description:
      "Pastel bañado con tres tipos de leches: evaporada, crema de leche y leche condensada",
    name: "pastel de tres leches",
    src: "./img/treslechescake.jpg"
  },
  {
    description: "Postre hecho con clara de huevo batida y azúcar",
    name: "merengues, suspiro o espumilla",
    src: "./img/espumillas.jpg"
  },
  {
    description: "Pastel para cumpleaños",
    name: "pastel de diferentes sabores",
    src: "./img/pastelCasero.jpg"
  },
  {
    description:
      "Postre tipico de la gastronomia latina, se puede servir frio o caliente",
    name: "arroz con leche",
    src: "./img/arrozconleche.jpg"
  },
  {
    description: "Delicia dulce y frita hecha de Yuca servida con miel",
    name: "buñuelos de yuca",
    src: "./img/bunuelos.jpg"
  }
];

// Javascript for the dessert section
const dessertList = document.getElementById("dessertList");
const dessertNames = [];
const dessertImgs = [];
const dessertDesc = [];

for (let i = 0; i < desserts.length; i++) {
  //  get name data and push it into an array
  dessertNames.push(desserts[i].name);
  //  get image data and push it into an array
  dessertImgs.push(desserts[i].src);
  //  get description data and push it into an array
  dessertDesc.push(desserts[i].description);
}

function createDessertItem() {
  for (let i = 0; i < dessertNames.length; i++) {
    const li = document.createElement("li");
    li.className = "dessert";

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

    // create an h4 with the name of the desserts
    const h4 = document.createElement("h4");
    h4.innerHTML = desserts[i].name;
    li.append(h4);

    const img = document.createElement("img");
    img.src = desserts[i].src;
    img.id = "dessertImg";
    li.append(img);

    const div = document.createElement("div");
    div.id = "description";
    let p = document.createElement("p");
    p.innerHTML = `${desserts[i].description}.`;
    div.append(p);
    li.append(div);

    // add all new created elements into li
    dessertList.append(li);
  }
}

createDessertItem();
