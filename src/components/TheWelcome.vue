<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive, ref } from "vue";
import { watch } from "vue";
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

watch(counter, (val) => {
  console.log("tools0 : ", val);
  const graphData = counter.getGraph(0);
  let voltage =
    graphData.voltage.length > 6
      ? graphData.voltage.slice(
          graphData.voltage.length - 6,
          graphData.voltage.length
        )
      : graphData.voltage;

  let frequency =
    graphData.frequency.length > 6
      ? graphData.frequency.slice(
          graphData.frequency.length - 6,
          graphData.frequency.length
        )
      : graphData.frequency;

  let current =
    graphData.current.length > 6
      ? graphData.current.slice(
          graphData.current.length - 6,
          graphData.current.length
        )
      : graphData.current;

  let power =
    graphData.power.length > 6
      ? graphData.power.slice(
          graphData.power.length - 6,
          graphData.power.length
        )
      : graphData.power;

  let powerF =
    graphData.powerF.length > 6
      ? graphData.powerF.slice(
          graphData.powerF.length - 6,
          graphData.powerF.length
        )
      : graphData.powerF;

  const tempSeries = [
    {
      name: "voltage",
      data: voltage,
    },
    {
      name: "frequency",
      data: frequency,
    },
    {
      name: "current",
      data: current,
    },
    {
      name: "power",
      data: power,
    },
    {
      name: "powerF",
      data: powerF,
    },
  ];

  updateSeries(tempSeries);
  updateOptionsCategory(graphData.time);
});

let options = reactive({
  chart: {
    id: "vuechart-example",
    height: 328,
    animations: {
      enabled: true,
      speed: 1000,
      animateGradually: {
        delay: 100,
      },
      dynamicAnimation: {
        speed: 500,
      },
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3, // margin is in pixels
        },
      },
    },
    zoom: {
      enabled: false,
    },
    foreColor: "#373d3f",
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    },
    toolbar: {
      show: false,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
      },
      autoSelected: "zoom",
    },
  },

  yaxis: {
    show: true,
    tooltip: {
      theme: "dark",
    },
    // tickAmount: 5,
    // min: 0,
    // max: 100,
  },

  xaxis: {
    tickAmount: undefined,
    tickPlacement: "between",
    min: 1993,
    max: 1995,
    range: 8,
    categories: [1991, 1992, 1993, 1994, 1995, 1996],
    // categories: [
    //   "01/15/2002",
    //   "01/16/2002",
    //   "01/17/2002",
    //   "01/18/2002",
    //   "01/19/2002",
    //   "01/20/2002",
    // ],
    // tickPlacement: 'between',
    tooltip: {
      enabled: false,
    },
    label: {
      style: {
        colors: "yellow",
        // color: "#777",
        fontSize: "12px",
        fontWeight: 400,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    borderColor: "green",
    show: true,
    row: {
      colors: ["blue", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.05,
    },
    padding: {
      bottom: 0,
    },
  },
  title: {
    text: "Media",
    align: "left",
    // offsetY: 25,
    offsetX: 20,
  },
  // colors: ["#fff"],
  subtitle: {
    text: "Statistics",
    // offsetY: 55,
    offsetX: 20,
  },
  markers: {
    size: 2,
    strokeWidth: 0,
    hover: {
      size: 5,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetY: -20,
  },
  tooltip: {
    theme: "dark",
  },
});

let series = ref([
  {
    name: "voltage",
    data: [1, 15, 26, 20, 33, 27],
  },
  {
    name: "frequency",
    data: [3, 33, 21, 42, 19, 32],
  },
  {
    name: "current",
    data: [0, 39, 122, 11, 29, 43],
  },
  {
    name: "power",
    data: [0, 39, 5, 11, 29, 43],
  },
  {
    name: "powerF",
    data: [0, 39, 52, 11, 20, 43],
  },
]);

const updateSeries = (data) => {
  series.value = data;
};

const updateOptionsCategory = (data) => {
  let temp = data.length > 6 ? data.slice(data.length - 6, data.length) : data;
  options = {
    ...options,
    xaxis: {
      ...options.xaxis,
      categories: temp,
      min: () => {
        return data[data.length - 6];
      },
      max: () => {
        return data[data.length - 1];
      },
    },
  };
};
</script>

<template>
  <div style="color: blue">
    <apexchart
      width="500"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<style scoped>
.apexcharts-tooltip {
  background: black;
  color: orange;
}
</style>
