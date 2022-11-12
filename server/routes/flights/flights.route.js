const { query } = require("express");
const express = require("express");
const app = express.Router();
const Flight = require("./flights.model");

app.get("/", async (req, res) => {
  const { from, to } = req.query;
  const flightData = await Flight.find({ from: from, to: to });

  if (flightData.length) {
    res.status(200).send(flightData);
    return;
  } else {
    res
      .status(404)
      .send({ message: "Flights not found for requested destination" });
    return;
  }
});

module.exports = app;
