import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts-gl";

const ChartWebGl = () => {
  const option = {
    title: {
      text: "3D-GL Chart",
    },
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [
      {
        type: "scatter3D",
        symbolSize: 50,
        data: [
          [-1, -1, -1],
          [0, 0, 0],
          [1, 1, 1],
        ],
        itemStyle: {
          opacity: 1,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{height: 400}} />;
};

export default ChartWebGl;
