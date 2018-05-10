require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/Project");
const projects = [
  {
    user: "5af2d179cf19be241cdd590e",
    projectName: "Prueba",
    description: "pruebas varias",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    web: "www.marca.com",
    uses: [{description: "marketing", value: 20,}, {description: "development", value: 80,}],
    financed: 0,
    sponsors: 0,
  },
  {
    user: "5af2d179cf19be241cdd590e",
    projectName: "Prueba2",
    description: "pruebas varias",
    image:
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
    web: "www.marca.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: 0,
  }
  
];
mongoose.connect(process.env.DBURL).then(() => {
  console.log(`Conectado a ${process.env.DBURL}`);
//   Project.collection.drop();
  projects.forEach(p => {
    let ph = new Project(p);
    ph.save()
    .then ( project => {
      console.log("saved");
    })
    .catch( e => console.log(e));
  });
});

