import { useState } from "react";
import axios from "axios";
import DataGraph from "./DataGraph";
import InputPanel from "./InputPanel";

function App() {
  const [tweetData, setTweetData] = useState({});
  const [dataIn, setDataIn] = useState(false);

  const fetchData = (user, numOfTweets) => {
    let userUrl = "http://localhost:8082/" + user + "/" + numOfTweets;
    console.log(userUrl);
    axios
      .get(userUrl)
      .then((res) => {
        console.log(res.data);
        setTweetData(res.data);
        setDataIn(true);
      })
      .catch((err) => {
        console.log("Error In Fetching Data...", err);
      });
  };

  const dataDisplay = dataIn
    ? tweetData.map((entry, index) => {
        return {
          name: index,
          tweetLength: entry.full_text.length,
          numOfHash: entry.entities.hashtags.length,
          retweetCount: entry.retweet_count,
          favoriteCount: entry.favorite_count,
          userMentions: entry.entities.user_mentions.length,
        };
      })
    : null;

  console.log(dataDisplay);

  return (
    <div className="container-outer">
      <h1>Visualizing Twitter</h1>
      <div className="graph-container">
        <DataGraph graphData={dataDisplay} />
      </div>
      <h4>white: length of tweet in characters</h4>
      <h4 style={{ color: "blue" }}>blue: number of times favorited</h4>
      <h4 style={{ color: "green" }}>green: number of times retweeted</h4>
      <h4 style={{ color: "yellow" }}>red: number of hashtags in tweet</h4>
      <InputPanel submitData={fetchData} />
    </div>
  );
}

export default App;
