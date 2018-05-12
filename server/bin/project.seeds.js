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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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
      "http://www.casasparaconstruir.com/projetos/140/01.jpg",
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

