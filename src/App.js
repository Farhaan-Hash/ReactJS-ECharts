import React from "react";
import PieToBarChart from "./components/PieToBarChart";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import MultiSeriesChart from "./components/MultiSeriesChart";
import StackedBarChart from "./components/StackedBarChart";
import BarRacing from "./components/BarRacing";
import Page from "./components/Line";
import Dynamic from "./components/Dynamic";
import FunnelChart from "./components/FunnelChart";
import PieChart from "./components/PieChart";
import ChartWebGl from "./components/ChartWebGl";
import GraphChart from "./components/GraphChart";
import RadarChart from "./components/RadarChart";
import LocalChart from "./components/LocalChart";
import StackedAreaChart from "./components/StackedAreaChart";
import SvgChart from "./components/SvgChart";
import Theme from "./components/Theme";

export default function App() {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        // gridTemplateRows: " 0fr",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "2em",
        overflow: "hidden",
        marginTop: "40px",
      }}
    >
      <PieToBarChart />
      <BarChart />
      <LineChart />
      <MultiSeriesChart />
      <StackedBarChart />
      <BarRacing />
      <Page />
      <Dynamic />
      <FunnelChart />
      <PieChart />
      <ChartWebGl />
      <GraphChart />
      <RadarChart />
      <LocalChart />
      <StackedAreaChart />
      <SvgChart />
      <Theme />
    </div>
  );
}
