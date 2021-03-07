import "./graphStyles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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

export default function DataGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#2C3A49" strokeWidth={2} />
        <XAxis dataKey="name" stroke="#2C3A49" />
        <YAxis stroke="#2C3A49" />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#C5D3E2"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="red" strokeWidth={2} />
        <Line type="monotone" dataKey="wv" stroke="blue" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
