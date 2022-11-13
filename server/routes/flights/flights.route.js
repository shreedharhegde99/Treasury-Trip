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

/* get the flight details by id */

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const flightData = await Flight.findOne({ _id: id });

  if (flightData?.from) {
    res.status(200).send(flightData);
    return;
  } else {
    res.status(404).send({ message: "Flights not found for requested id" });
    return;
  }
});

module.exports = app;
