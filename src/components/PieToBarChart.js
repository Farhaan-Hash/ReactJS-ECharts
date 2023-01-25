import React from "react";
import ReactEcharts from "echarts-for-react";

const dataset = {
  dimensions: ["name", "score"],
  source: [
    ["Orianthi Panagaris", 314],
    ["Eddie Van Halen", 351],
    ["Lita Ford ", 287],
    ["Don Felder", 219],
    ["Jerry Cantrell", 253],
    ["Nancy Wilson", 165],
    ["David Gilmore", 318],
    ["Alex Lifeson", 366],
  ],
};
const pieOption = {
  title: {
    // title of our chart
    text: "Pie to Bar  Chart",
  },
  dataset: [dataset],
  series: [
    {
      type: "pie",
      // associate the series to be animated by id
      id: "Score",
      radius: [0, "50%"],
      universalTransition: true,
      animationDurationUpdate: 1000,
    },
  ],
};
const barOption = {
  dataset: [dataset],
  xAxis: {
    type: "category",
    axisLabel: {
      rotate: 20,
      textStyle: {
        baseline: "top",
        color: "#333",
        fontSize: 10,
        fontWeight: "bold",
      },
    },
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      // associate the series to be animated by id
      id: "Score",
      // Each data will have a different color
      colorBy: "data",
      encode: {x: "name", y: "score"},
      universalTransition: true,
      animationDurationUpdate: 1000,
    },
  ],
};

export default function PieToBarChart() {
  const [currentChart, setCurrentChart] = React.useState(pieOption);

  const toggleCharts = () => {
    setCurrentChart(currentChart === pieOption ? barOption : pieOption);
  };

  return (
    <div>
      <button onClick={() => toggleCharts()}>Toggle</button>
      <ReactEcharts
        option={currentChart}
        style={{width: "600px", height: "400px"}}
      />
    </div>
  );
}
