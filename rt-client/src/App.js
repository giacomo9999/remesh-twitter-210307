import { useState } from "react";
import axios from "axios";

function App() {
  const [tweetData, setTweetData] = useState({});
  const [dataIn, setDataIn] = useState(false);

  const fetchData = (user) => {
    let userUrl = "http://localhost:8082/" + user;
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
    ? tweetData.map((entry, index) => (
        <li key={"tweet_" + index}>{entry.id}</li>
      ))
    : null;

  return (
    <div className="container-outer">
      <h1>Visualizing Twitter</h1>
      <button onClick={() => fetchData("erikloomis")}>Fetch The Data</button>
      <ul>{dataDisplay}</ul>
    </div>
  );
}

export default App;
