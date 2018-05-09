require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");
const users = [
  {
    name: "Abdallah Aberouch",
    email: "a.aberouch@gmail.com",
    balance: 100,
  },
  {
    name: "Pedro Piury",
    email: "pedro.piury@gmail.com",
    balance: 100,
  },
  {
    name: "Yago Vega",
    email: "yagofvv@gmail.com",
    balance: 100,
  },
  {
    name: "Pablo García",
    email: "pablo.ramon.garcia.fernandez@gmail.com",
    balance: 100,
  },
  {
    name: "Luna Fidalgo Manchón",
    email: "lunafidalgo@gmail.com",
    balance: 100,
  },
  {
    name: "Mateus Cavalcanti Félix Oliveira",
    email: "mateus.cfoliveira@gmail.com",
    balance: 100,
  },
  {
    name: "José Manuel Barceló Bazal",
    email: "jmbbazal@gmail.com",
    balance: 100,
  },
  {
    name: "Álvaro Reguera Ferrer",
    email: "alvaro.reguera@gmail.com",
    balance: 100,
  },
  {
    name: "Raúl de la Llave Suela",
    email: "rdl.llave@gmail.com",
    balance: 100,
  },
  {
    name: "Antea Martín",
    email: "anteamartin@gmail.com",
    balance: 100,
  },
  {
    name: "Carlos Llorente Yuste",
    email: "llorenteyuste@hotmail.com",
    balance: 100,
  },
  {
    name: "Risto Tapani Raihala",
    email: "ristotapani@gmail.com",
    balance: 100,
  },
  {
    name: "Alejandro Aceituna Cano",
    email: "aacecan.dev@gmail.com",
    balance: 100,
  },
  {
    name: "Juan Sánchez Mesa",
    email: "sanchezmesaj@gmail.com",
    balance: 100,
  },
  {
    name: "Nacho López Sánchez ",
    email: "ignlopezsanchez@gmail.com",
    balance: 100,
  },
  {
    name: "Borja Arana",
    email: "barana1977@gmail.com",
    balance: 100,
  },
  {
    name: "Alejandro Ibáñez",
    email: "alexibape@hotmail.com",
    balance: 100,
  },
  {
    name: "Mapi Carrillo Romaguera",
    email: "mp.carrillo@yahoo.es",
    balance: 100,
  },
  {
    name: "Estanislao Pan García",
    email: "e.pan.gar@gmail.com",
    balance: 100,
  },
  {
    name: "Esther Vega Marcos",
    email: "esthvega@hotmail.es",
    balance: 100,
  },
  {
    name: "Luis Nueda",
    email: "nueda.luis@gmail.com",
    balance: 100,
  },
  {
    name: "Mikolaj Bernecki",
    email: "muflonex@gmail.com",
    balance: 100,
  },
  {
    name: "Fernando A. Galende",
    email: "fernandogalende@gmail.com",
    balance: 100,
  },
  {
    name: "Alvaro Trancon Rodriguez",
    email: "alvarotrancon@gmail.com",
    balance: 100,
  },
  {
    name: "Beltran Carreras",
    email: "beltran_xv@hotmail.com",
    balance: 100,
  },
  {
    name: "Javier Valiente",
    email: "javara00@gmail.com",
    balance: 100,
  },
];
mongoose.connect(process.env.DBURL).then(() => {
  console.log(`Conectado a ${process.env.DBURL}`);
//   User.collection.drop();
  users.forEach(p => {
    let ph = new User(p);
    ph.save()
    .then ( user => {
      console.log("saved");
    })
    .catch( e => console.log(e));
  });
});