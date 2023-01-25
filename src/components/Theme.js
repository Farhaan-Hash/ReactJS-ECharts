import React, {useState} from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";

echarts.registerTheme("my_theme", {
  backgroundColor: "#f4cccc",
});
echarts.registerTheme("another_theme", {
  backgroundColor: "#eee",
});

const Theme = () => {
  const option = {
    title: {
      text: "Staircase Waterfall Chart",
      subtext: "From ExcelHome",
      sublink: "http://e.weibo.com/1341556070/Aj1J2x5a5",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: ["expense income"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: {show: false},
      data: [
        "November 1",
        "November 2",
        "November 3",
        "November 4",
        "November 5",
        "November 6",
        "November 7",
        "November 8",
        "November 9",
        "November 10",
        "November 11",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Auxiliary",
        type: "bar",
        stack: "total amount",
        itemStyle: {
          normal: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
          emphasis: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
      },
      {
        name: "income",
        type: "bar",
        stack: "total amount",
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"],
      },
      {
        name: "Expenditure",
        type: "bar",
        stack: "total amount",
        label: {
          normal: {
            show: true,
            position: "bottom",
          },
        },
        data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203],
      },
    ],
  };

  const [theme, setTheme] = useState();
  const [className, setClassName] = useState("class_1");

  function toggleTheme() {
    setTheme(theme === "my_theme" ? "another_theme" : "my_theme");
  }

  function toggleClassName() {
    setClassName(className === "class_1" ? "class_2" : "class_1");
  }

  return (
    <>
      <ReactECharts
        option={option}
        className={className}
        theme={theme}
        style={{height: 400}}
      />
      <br />
      <div>
        <button onClick={toggleTheme}>Click to Toggle theme.</button>
        <button onClick={toggleClassName}>Click to Toggle className.</button>
      </div>
    </>
  );
};

export default Theme;
