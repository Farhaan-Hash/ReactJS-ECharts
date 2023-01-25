import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts/i18n/langFR";

const LocalChart = () => {
  const option = {
    title: {
      text: "Local Chart",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {},
        restore: {},
      },
    },
    tooltip: {},
    legend: {
      data: ["Sales"],
    },
    xAxis: {
      data: [
        "shirt",
        "Cardigan",
        "Chiffon shirt",
        "Pants",
        "High heel",
        "sock",
      ],
    },
    yAxis: {},
    series: [
      {
        name: "Sales",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{height: 400}} opts={{locale: "FR"}} />
  );
};

export default LocalChart;
