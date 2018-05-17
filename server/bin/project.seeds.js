require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/Project");
const projects = [


  {
    author: ["5af6e26c2c12c850a1376043", "5af6e26c2c12c850a1376045"],
    projectName: "Not Only Netflix",
    truffleAccount: "0xa7d33A66180656EfB884570549b16b2E074D7a5B",
    description: "Base de datos de películas para crear watchlist y favlist por usuario.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137282/Screen_Shot_2018-05-11_at_15.31.26.png",
    web: "http://not-only-netflix.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af6e26c2c12c850a137603b", "5af6e26c2c12c850a137603e"],
    projectName: "movies4-u",
    truffleAccount: "0x8e991edC818A927e76B49aE51500B080477Ef2F5",
    description: "Aplicación web en la que podrás consultar y guardar en listas todas las películas que hayas visto o quieras ver.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137278/Screen_Shot_2018-05-11_at_15.35.47.png",
    web: "http://movies4-u.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af6e26c2c12c850a1376033", "5af6e26c2c12c850a137603d"],
    projectName: "Pasión entre algodones",
    truffleAccount: "0x97fDA0661Ca31207e7ba04177C013266868e1986",
    description: "Una tienda online de camisetas que inmortalizan las mejores telenovelas de todos los tiempos",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137284/Screen_Shot_2018-05-11_at_12.32.54.png",
    web: "https://usurpadoras-project.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },
  
  {
    author: ["5af6e26c2c12c850a137602b", "5af6e26c2c12c850a1376038"],
    projectName: "Fiestit",
    truffleAccount: "0xD50B5e6F0ce220C284cDBf140328ca19aDc5d8dD",
    description: "Tu mejor organizador de fiestas",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137285/Screen_Shot_2018-05-11_at_12.30.57.png",
    web: "http://fiestit.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af6e26c2c12c850a137602d", "5af6e26c2c12c850a137603a"],
    projectName: "Wadaloop",
    truffleAccount: "0xc99fa56aFe032CC26781E7fbe874C0a8e8C0E228",
    description: "Marketplace para compra venta de artículos de segunda mano",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137282/Screen_Shot_2018-05-11_at_12.31.49.png",
    web: "https://wadaloop.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: ["5af6e26c2c12c850a137602b"],
  },

  {
    author: ["5af6e26c2c12c850a137602f", "5af6e26c2c12c850a1376037"],
    projectName: "Plataforma Ironhack Proyectos",
    truffleAccount: "0x4C53ad4790daC94d22DC6C374aa41bc270676DC8",
    description: "Plataforma de intercambio de ideas dentro de Ironhack",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137280/Screen_Shot_2018-05-11_at_12.43.04.png",
    web: "https://ih-studentplatform.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af6e26c2c12c850a137602a", "5af6e26c2c12c850a1376041"],
    projectName: "Madrid-adopta",
    truffleAccount: "0x7B77eb6bBD5a9f2adF428526f1ee053048Ce9fF4",
    description: "Una web para poner en contacto a gente que busca mascota con centros de adopcion",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137263/Screen_Shot_2018-05-11_at_15.36.21.png",
    web: "https://madrid-adopta.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  
];
mongoose.connect(process.env.DBURL).then(() => {
  console.log(`Conectado a ${process.env.DBURL}`);
   Project.collection.drop();
  projects.forEach(p => {
    let ph = new Project(p);
    ph.save()
    .then ( project => {
      console.log("saved");
    })
    .catch( e => console.log(e));
  });
});

