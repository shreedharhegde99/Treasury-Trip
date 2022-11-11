const Attraction = require("./country/attractions.model");

const express = require("express");
const app = express.Router();

app.get("/", async (req, res) => {
  console.log("request for attractions");
  const { page, country } = req.query;
  console.log(page);
  if(country){

    const countryData = await Attraction.findOne({ country: country });
    // console.log(countryData.data);
    res.send(countryData.data);
    return ;
  }
  res.send({message:"Please provide the country name"})
});

module.exports = app;
