import React from "react";
import ReactECharts from "echarts-for-react";

const Page = () => {
  const eChartsOption = {
    title: {
      // title of our chart
      text: "Line Curve Chart",
    },
    grid: {top: 8, right: 8, bottom: 24, left: 36},
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
      }}
    >
      <ReactECharts option={eChartsOption} />
    </div>
  );
};

export default Page;
