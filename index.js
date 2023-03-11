// Import Express uit node_modules
import express, { response } from "express";
// console.log(express);

// New Express app 
const app = express();

// URL data from REST API | fetch data als JSON -> variabele data
const url = "https://api.buurtcampus-oost.fdnd.nl/api/v1/stekjes";
const data = await fetch(url).then((response) => response.json());
console.log(data);

// Instellen EJS | 'views' map doorgeven
app.set("view engine", "ejs");
app.set("views", "./views");
// console.log(set);

// 'public' = static resources | set up public folder
app.use(express.static("./public"));
// console.log(use);

//  Index route maken
app.get("/", function (req, res) {
  res.render("index", data);
});

// Poortnummer instellen
app.set("port", process.env.PORT || 8000);

// Start express + poortnummer ophalen
app.listen(app.get("port"), function () {
  // Console message + doorgeven poortnummer 
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
// console.log(listen)








// // Importeer express uit de node_modules map
// import express from "express";

// const url = "https://api.buurtcampus-oost.fdnd.nl/api/v1/stekjes";
// const data = await fetch(url).then((response) => response.json());

// console.log(data);

// // Maak een nieuwe express app aan
// const app = express();

// // Stel ejs in als template engine en geef de 'views' map door
// app.set("view engine", "ejs");
// app.set("views", "./views");

// // Gebruik de map 'public' voor statische resources
// app.use(express.static("public"));

// // Maak een route voor de index
// app.get("/", function (req, res) {
//   // res.send('Hello World!')
//   res.render("index", data);
// });

// // Stel het poortnummer in waar express op gaat luisteren
// app.set("port", process.env.PORT || 8000);

// // Start express op, haal het ingestelde poortnummer op
// app.listen(app.get("port"), function () {
//   // Toon een bericht in de console en geef het poortnummer door
//   console.log(`Application started on http://localhost:${app.get("port")}`);
// });
