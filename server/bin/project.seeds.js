require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/Project");
const projects = [
  {
    author: ["5af2d179cf19be241cdd590e"],
    projectName: "Prueba",
    description: "pruebas varias",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    web: "www.marca.com",
    uses: [{description: "marketing", value: 20,}, {description: "development", value: 80,}],
    financed: 0,
    sponsors: [],
  },
  {
    author: ["5af2d179cf19be241cdd590e"],
    projectName: "Prueba2",
    description: "pruebas varias",
    image:
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
    web: "www.marca.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af6e26c2c12c850a1376031"],
    projectName: "Easy-Peasy",
    description: "Marketplace que pone en contacto a escuelas de Surf y surferos",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137286/Screen_Shot_2018-05-11_at_12.30.08.png",
    web: "https://easy-peasy-surf.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Fiestit",
    description: "Tu mejor organizador de fiestas",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137285/Screen_Shot_2018-05-11_at_12.30.57.png",
    web: "http://fiestit.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Wadaloop",
    description: "Marketplace para compra venta de artículos de segunda mano",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137282/Screen_Shot_2018-05-11_at_12.31.49.png",
    web: "https://wadaloop.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Pasión entre algodones",
    description: "Una tienda online de camisetas que inmortalizan las mejores telenovelas de todos los tiempos",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137284/Screen_Shot_2018-05-11_at_12.32.54.png",
    web: "https://usurpadoras-project.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Plataforma Ironhack Proyectos",
    description: "Plataforma de intercambio de ideas dentro de Ironhack",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137280/Screen_Shot_2018-05-11_at_12.43.04.png",
    web: "https://ih-studentplatform.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Planes Nutricionales",
    description: "Plataforma para componer planes nutricionales diarios.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137280/Screen_Shot_2018-05-11_at_15.29.38.png",
    web: "https://nutriproject.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Chinopen",
    description: "Esta aplicación es un localizador de establecimientos asiatios de alimentación mediante el uso de Google Maps , utilizando la posición a tiempo real del usuario y los horarios de apertura de los mismos. Además, al seleccionar el establecimiento deseado, te traza en el mapa la ruta más rapida para llegar a este.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137279/Screen_Shot_2018-05-11_at_15.30.37.png",
    web: "http://chinopen.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Not Only Netflix",
    description: "Base de datos de películas para crear watchlist y favlist por usuario.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137282/Screen_Shot_2018-05-11_at_15.31.26.png",
    web: "http://not-only-netflix.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Doom Corp",
    description: "Red de comunicación entre empleados de la empresa de un supervillano.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137279/Screen_Shot_2018-05-11_at_15.32.16.png",
    web: "https://doom-corp.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Iron-Comics",
    description: "Una plataforma donde encontrar comics, añadirlos a tu lista, poder hacer reviews sobre ellos",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137283/Screen_Shot_2018-05-11_at_15.33.02.png",
    web: "https://iron-comics.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Planit",
    description: "Página web de planes hechos por y para el usuario",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137279/Screen_Shot_2018-05-11_at_15.33.52.png",
    web: "planit-ironhack.herokuapp.com",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Bus Mad",
    description: "Aplicación móvil que recoge las líneas de autobús de Madrid, pudiendo comprobar información del tráfico y ofreciendo la posibilidad de comentar y valorar las líneas.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137278/Screen_Shot_2018-05-11_at_15.34.37.png",
    web: "https://busmad.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "movies4-u",
    description: "Aplicación web en la que podrás consultar y guardar en listas todas las películas que hayas visto o quieras ver.",
    image:
      "http://res.cloudinary.com/dhyvlahgj/image/upload/v1526137278/Screen_Shot_2018-05-11_at_15.35.47.png",
    web: "http://movies4-u.herokuapp.com/",
    uses: [{description: "marketing", value: 30,}, {description: "development", value: 70,}],
    financed: 0,
    sponsors: [],
  },

  {
    author: ["5af2d179cf19be241cdd590e", "5af6e26c2c12c850a1376040"],
    projectName: "Madrid-adopta",
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

