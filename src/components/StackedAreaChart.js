import React from "react";
import ReactECharts from "echarts-for-react";

const StackedAreaChart = () => {
  const option = {
    title: {
      text: "Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Marketing", "Affiliate Advertising", "video ad"],
      position: "left",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Marketing",
        type: "line",
        stack: "Total",
        areaStyle: {normal: {}},
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Affiliate Advertising",
        type: "line",
        stack: "Total",
        areaStyle: {normal: {}},
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "video ad",
        type: "line",
        stack: "Total",
        areaStyle: {normal: {}},
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  };

  return (
    <div
    // style={{
    //   width: "60%",
    //   height: "50%",
    // }}
    >
      <ReactECharts option={option} style={{height: "400px"}} />
    </div>
  );
};

export default StackedAreaChart;
