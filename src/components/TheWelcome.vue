<script setup>
import { reactive, ref } from "vue";
import { onMounted } from "vue";

onMounted(() => {
  // set theme tooltip apexchart into dark mode
  // this.$refs.t
  // Apex.tooltip.theme = "dark";
});

const options = reactive({
  chart: {
    id: "vuechart-example",
    height: 328,
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
    tickAmount: 5,
    min: 0,
    max: 100,
  },

  xaxis: {
    tickAmount: undefined,
    tickPlacement: "between",
    // min: 1993,
    // max: 1995,
    // range: 1,
    // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    categories: [
      "01/15/2002",
      "01/16/2002",
      "01/17/2002",
      "01/18/2002",
      "01/19/2002",
      "01/20/2002",
    ],
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
  // grid: {
  //   row: {
  //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
  //     opacity: 0.005,
  //   },
  // },
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

const series = ref([
  {
    name: "Music",
    data: [1, 15, 26, 20, 33, 27],
  },
  {
    name: "Photos",
    data: [3, 33, 21, 42, 19, 32],
  },
  {
    name: "Files",
    data: [0, 39, 52, 11, 29, 43],
  },
]);

// const tooltip = reactive({
//   theme: "dark",
//   x: {
//     show: false,
//   },
//   y: {
//     title: {
//       formatter: function (seriesName) {
//         return seriesName;
//       },
//     },
//   },
// });
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
