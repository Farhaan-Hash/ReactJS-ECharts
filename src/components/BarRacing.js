import ReactEChart from "echarts-for-react";

export default function BarRacing() {
  var data = [];
  for (let i = 0; i < 7; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  function run() {
    var option;
    var myChart;
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 1222000);
      } else {
        data[i] += Math.round(Math.random() * 1222200);
      }
    }
    myChart.setOption(option);
  }

  setTimeout(function () {
    run();
  }, 0);

  setInterval(function () {
    run();
  }, 3000);

  const eChartsOption = {
    title: {
      text: "Racing Bar",
    },
    xAxis: {
      max: "dataMax",
    },
    yAxis: {
      type: "category",
      data: ["A", "B", "C", "D", "E"],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 4, // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: "X",
        type: "bar",
        data: data,
        label: {
          show: true,
          position: "right",
          valueAnimation: true,
        },
      },
    ],
    legend: {
      show: true,
      position: "top",
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
  };

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
      }}
    >
      <ReactEChart option={eChartsOption} />
    </div>
  );
}
