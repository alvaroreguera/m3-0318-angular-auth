require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("../models/Project");
const projects = [
  {
    user: "XYX",
    projectName: "S9 64 GB",
    description: "aaaa",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    financialNeeds: 800
  },
  {
    user: "XZX",
    projectName: "S9 64 GB",
    description: "ddddd",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    financialNeeds: 800
  },
  {
    user: "XWX",
    projectName: "S9 64 GB",
    description: "bbbb",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    financialNeeds: 800
  },
  {
    user: "XPX",
    projectName: "S9 64 GB",
    description: "cccccc",
    image:
      "http://stg-images.samsung.com/is/image/samsung/p5/es/smartphones/galaxy-s9/gallery/s9_purple.png?$ORIGIN_PNG$",
    financialNeeds: 800
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

