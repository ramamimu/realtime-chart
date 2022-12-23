<script setup>
import { reactive, ref } from "vue";
import { watch } from "vue";
import { useChartStore } from "../stores/chart";

const chartStore = useChartStore();

const chart = ref();

watch(chartStore, () => {
  if (chartStore.isChange0) {
    let graphData = chartStore.getGraph(0);
    chart.value.updateSeries(chartStore.getSeries(graphData));
    chart.value.updateOptions(
      chartStore.getOptions(graphData.time, options),
      true,
      true
    );
  }
});

let options = reactive({
  chart: {
    id: "vuechart-example",
    width: "100%",
    height: 500,
    animations: {
      enabled: true,
      speed: 1000,
      easing: "easeinout",
      animateGradually: {
        enabled: false,
        delay: 10,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 1000,
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
  },

  xaxis: {
    tickAmount: undefined,
    tickPlacement: "between",
    categories: [],
    tooltip: {
      enabled: false,
    },
    label: {
      style: {
        colors: "yellow",
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
    offsetX: 20,
  },
  subtitle: {
    text: "Statistics",
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
    data: [],
  },
  {
    name: "frequency",
    data: [],
  },
  {
    name: "current",
    data: [],
  },
  {
    name: "power",
    data: [],
  },
  {
    name: "powerF",
    data: [],
  },
]);
</script>

<template>
  <div style="color: blue">
    <apexchart
      type="line"
      :options="options"
      :series="series"
      ref="chart"
    ></apexchart>
  </div>
</template>

<style scoped>
.apexcharts-tooltip {
  background: black;
  color: orange;
}
</style>
