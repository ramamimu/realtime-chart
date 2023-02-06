<script setup>
import { reactive, ref } from "vue";
import { watch } from "vue";
import { useChartStore } from "../stores/chart";

const props = defineProps({
  typeData: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const chartStore = useChartStore();
const chart = ref();
const modul = ["voltage", "frequency", "current", "power", "powerF"];
const picked = ref("voltage");
const lastValue = reactive({
  value: 0,
  time: 0,
});

const setGraph = () => {
  let graphData = chartStore.getGraph(props.typeData, 20);
  if (graphData.current) {
    lastValue.value =
      graphData[picked.value][graphData[picked.value].length - 1];
    lastValue.time = new Date(graphData.time[graphData.time.length - 1]);

    lastValue.time = `${chartStore.setTimeFormat(
      lastValue.time.getHours()
    )}:${chartStore.setTimeFormat(
      lastValue.time.getMinutes()
    )}:${chartStore.setTimeFormat(lastValue.time.getSeconds())}`;
  }

  options.yaxis = chartStore.offsetY[picked.value];

  chart.value.updateSeries(chartStore.getSeries(graphData, picked.value));
  chart.value.updateOptions(
    chartStore.getOptions(graphData.time, options),
    true,
    true
  );
};

watch(chartStore, () => {
  let isChange = false;
  props.title === "modul 1"
    ? (isChange = chartStore.isChange0)
    : (isChange = chartStore.isChange1);
  if (isChange) {
    setGraph();
  }
});

watch(picked, () => {
  setGraph();
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
        delay: 100,
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
          size: "88%",
          background: "transparent",
        },
        track: {
          show: false,
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
    foreColor: "#abdbe3",
    dropShadow: {
      enabled: true,
      top: 6,
      left: 2,
      blur: 6,
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
    tickPlacement: "on",
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
  colors: ["#72cf30", "#bacf30", "blue"],
  stroke: {
    curve: "smooth",
    width: 5,
    colors: ["#72cf30"],
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
    text: props.title,
    align: "left",
    offsetX: 20,
  },
  subtitle: {
    text: "Statistics",
    offsetX: 20,
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
  <div class="relative p-3 pt-14">
    <div
      class="absolute right-6 top-10 w-40 p-2 bg-slate-800 border-gray-700 rounded-lg flex items-center justify-around"
    >
      <div class="text-gray-400">
        <p class="text-xl font-bold text-left">
          {{ picked }}
        </p>
        <p class="text-sm font-extrabold text-left">
          {{ lastValue.time }}
        </p>
      </div>
      <div>
        <p class="font-extrabold text-3xl text-white">
          {{ lastValue.value }}
        </p>
      </div>
    </div>
    <div class="flex gap-2 pb-2 justify-center absolute right-6 top-0 z-50">
      <div v-for="item in modul" :key="item">
        <input
          :checked="item == 'voltage'"
          type="radio"
          :id="item"
          :name="props.title"
          :value="item"
          v-model="picked"
        />
        <label class="ml-1 text-sm text-gray-200" :for="item">{{ item }}</label>
      </div>
    </div>

    <div style="color: blue">
      <apexchart
        type="line"
        :options="options"
        :series="series"
        ref="chart"
      ></apexchart>
    </div>
  </div>
</template>
