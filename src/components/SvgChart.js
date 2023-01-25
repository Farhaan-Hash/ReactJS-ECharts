import React from "react";
import ReactECharts from "echarts-for-react";

const SvgChart = () => {
  const option = {
    title: {
      text: "SVG",
    },
    tooltip: {},
    legend: {
      data: ["Sales"],
    },
    xAxis: {
      data: [
        "shirt",
        "cardigan",
        "chiffon shirt",
        "pants",
        "high heels",
        "socks",
      ],
    },
    yAxis: {},
    series: [
      {
        name: "Sales",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{height: 400}}
      opts={{renderer: "svg"}}
    />
  );
};

export default SvgChart;
