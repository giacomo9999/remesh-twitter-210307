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

export default function DataGraph(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={props.graphData}>
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
