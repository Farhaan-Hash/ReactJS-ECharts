import React, {useRef} from "react";
import ReactECharts from "echarts-for-react";

const FunnelChart = () => {
  const option = {
    title: {
      text: "funnel chart",
      subtext: "purely fictitious",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        dataView: {readOnly: false},
        restore: {},
        saveAsImage: {},
      },
    },
    legend: {
      data: ["Display", "Click", "Visit", "Consultation", "Order"],
    },
    series: [
      {
        name: "expected",
        type: "funnel",
        left: "10%",
        width: "80%",
        label: {
          normal: {
            formatter: "{b}expected",
          },
          emphasis: {
            position: "inside",
            formatter: "{b}expected: {c}%",
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            opacity: 0.7,
          },
        },
        data: [
          {value: 60, name: "access"},
          {value: 40, name: "consult"},
          {value: 20, name: "Order"},
          {value: 80, name: "click"},
          {value: 100, name: "show"},
        ],
      },
      {
        name: "actual",
        type: "funnel",
        left: "10%",
        width: "80%",
        maxSize: "80%",
        label: {
          normal: {
            position: "inside",
            formatter: "{c}%",
            textStyle: {
              color: "#fff",
            },
          },
          emphasis: {
            position: "inside",
            formatter: "{b}actual: {c}%",
          },
        },
        itemStyle: {
          normal: {
            opacity: 0.5,
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
        data: [
          {value: 30, name: "access"},
          {value: 10, name: "consult"},
          {value: 55, name: "Order"},
          {value: 44, name: "click"},
          {value: 50, name: "show"},
        ],
      },
    ],
  };

  const instance = useRef(null);

  return (
    <div
      style={{
        width: "60%",
        height: "50%",
      }}
    >
      <ReactECharts ref={instance} option={option} style={{height: 400}} />
    </div>
  );
};

export default FunnelChart;
