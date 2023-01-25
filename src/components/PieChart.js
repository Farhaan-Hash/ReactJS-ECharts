import React, {useState} from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    title: {
      text: "Pie Chart",
      subtext: "purely fictitious",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: [
        "direct interview",
        "email marketing",
        "Affiliate Advertising",
        "video ad",
        "search engine",
      ],
    },
    series: [
      {
        name: "access source",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          {value: 335, name: "direct interview"},
          {value: 310, name: "email marketing"},
          {value: 234, name: "Affiliate Advertising"},
          {value: 135, name: "video ad"},
          {value: 1548, name: "search engine"},
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    console.log("echarts is ready", echarts);
  }

  function onChartClick(param, echarts) {
    console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts);
  }

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
      }}
    >
      <ReactECharts
        option={option}
        style={{height: 400}}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
    </div>
  );
};

export default PieChart;
