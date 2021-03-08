import { useState } from "react";
import axios from "axios";
import DataGraph from "./DataGraph";

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
    ? tweetData.map((entry, index) =>
        // <li key={"tweet_" + index}>{entry.full_text.length}</li>
        {
          return {
            name: index,
            tweetLength: Math.log10(entry.full_text.length),
            numOfHash: entry.entities.hashtags.length,
            retweetCount: Math.log10(entry.retweet_count),
            favoriteCount: Math.log10(entry.favorite_count),
            userMentions: Math.log10(entry.entities.user_mentions.length),
          };
        }
      )
    : null;

  console.log(dataDisplay);

  return (
    <div className="container-outer">
      <h1>Visualizing Twitter</h1>
      <div className="graph-container">
        <DataGraph graphData={dataDisplay} />
      </div>
      <button onClick={() => fetchData("techreview", 20)}>
        Fetch The Data
      </button>
      {/* <ul>{dataDisplay}</ul> */}
    </div>
  );
}

export default App;
