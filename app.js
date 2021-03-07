require("dotenv").config();
const Twit = require("twit");
const express = require("express");
const app = express();

const apikey = process.env.API_KEY;
const apiSecretKey = process.env.API_SECRET_KEY;
const accessToken = process.env.ACCESS_TOKEN;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

var T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

// {
//     q: "ErikLoomis since:2021-3-3",
//     count: 2,
//   }

app.get("/:id", (req, res) =>
  (async () => {
    T.get(
      "search/tweets",
      {
        q: req.params.id + " since:2021-3-3",
        count: 2,
      },
      (err, data, response) => {
        console.log("Data In " + req.params.id);
        res.send(data.statuses);
      }
    );
  })()
);

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
