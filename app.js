require("dotenv").config();
const Twit = require("twit");
const express = require("express");
const app = express();
const cors = require("cors");

const apikey = process.env.API_KEY;
const apiSecretKey = process.env.API_SECRET_KEY;
const accessToken = process.env.ACCESS_TOKEN;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const port = process.env.PORT || 8082;

var T = new Twit({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

// Get Tweet data by username
app.get("/:id", (req, res) =>
  (async () => {
    T.get(
      "statuses/user_timeline",
      {
        screen_name: req.params.id,
        count: 10,
        tweet_mode: "extended",
      },
      (err, data, response) => {
        console.log("Data In: " + req.params.id);
        res.send(data);
      }
    );
  })()
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
