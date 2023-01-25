import React, {useEffect} from "react";
import ReactECharts from "echarts-for-react";

const RadarChart = () => {
  const option = {
    title: {
      text: "Basic Radar Chart",
    },
    tooltip: {},
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        {name: "sales", max: 6500},
        {name: "Administration", max: 16000},
        {name: "Information Techology", max: 30000},
        {name: "Customer Support", max: 38000},
        {name: "Development", max: 52000},
        {name: "Marketing", max: 25000},
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: "Allocated Budget",
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: "Actual Spending",
          },
        ],
      },
    ],
  };

  let timer;

  useEffect(() => {
    return () => clearTimeout(timer);
  });

  const loadingOption = {
    text: "Loading...",
    color: "#4413c2",
    textColor: "#270240",
    maskColor: "rgba(194, 88, 86, 0.3)",
    zlevel: 0,
  };

  function onChartReady(echarts) {
    timer = setTimeout(function () {
      echarts.hideLoading();
    }, 3000);
  }

  return (
    <div>
      <ReactECharts
        option={option}
        style={{height: 400}}
        onChartReady={onChartReady}
        loadingOption={loadingOption}
        showLoading={true}
      />
    </div>
  );
};

export default RadarChart;
