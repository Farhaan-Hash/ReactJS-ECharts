import ReactEChart from "echarts-for-react";

export default function StackedBarChart() {
  const eChartsOption = {
    title: {
      // title of our chart
      text: "Stacked Bar Chart",
    },
    xAxis: {
      // name of X Axis
      name: "X Axis",
      type: "category",
      // Contains the values for XAxis
      data: ["One", "Two", "Three", "Four", "Five", "Six"],
    },
    yAxis: [
      {
        // name of Y Axis
        name: "Y Axis",
        type: "value",
      },
    ],
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {},
      },
    },

    series: [
      {
        data: [101, 200, 300, 400, 450, 650],
        type: "bar",
        stack: "total",
      },
      {
        data: [93, 30, 100, 230, 104, 60],
        type: "bar",
        stack: "total",
      },
    ],
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
