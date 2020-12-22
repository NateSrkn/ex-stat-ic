const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Endpoints
const grabTrackList = require("./endpoints/tracks");
const grabWeather = require("./endpoints/weather");
const grabAge = require("./endpoints/age");

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());
app.get("/", (req, res) =>
  res.send({
    name: {
      first: "Nathan",
      last: "Sorkin",
    },
    age: grabAge(),
    others: {
      music: "/tracks",
      weather: "/weather",
    },
  })
);

app.get("/tracks", async (req, res) => res.send(await grabTrackList()));

app.get("/weather", async (req, res) => res.send(await grabWeather()));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
