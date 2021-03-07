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
    ? tweetData.map((entry, index) => (
        <li key={"tweet_" + index}>{entry.full_text.length}</li>
      ))
    : null;

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      wv: 3200,
      // amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      wv: 4300,
      // amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 15000,
      wv: 7600,
      // amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      wv: 1900,
      // amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      wv: 4500,
      // amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      wv: 500,
      // amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      wv: 1800,
      // amt: 2100,
    },
  ];

  return (
    <div className="container-outer">
      <h1>Visualizing Twitter</h1>
      <div className="graph-container">
        <DataGraph graphData={data}/>
      </div>
      <button onClick={() => fetchData("erikloomis", 4)}>Fetch The Data</button>
      <ul>{dataDisplay}</ul>
    </div>
  );
}

export default App;
