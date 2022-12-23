import { ref } from "vue";
import { defineStore } from "pinia";

export const useChartStore = defineStore("chart", () => {
  const tools0 = ref([]);
  const isChange0 = ref(false);

  const tools1 = ref([]);
  const isChange1 = ref(false);

  const chart = ref();

  const getLastData = (arr, range) => {
    return arr.length > range ? arr.slice(arr.length - range, arr.length) : arr;
  };

  const getGraph = (index) => {
    let tools;
    index === 0 ? (tools = tools0) : (tools = tools1);

    let res = {
      time: [],
      voltage: [],
      frequency: [],
      current: [],
      power: [],
      powerF: [],
    };

    // decompose data
    tools.value.forEach((tool) => {
      res.time.push(tool.time);
      res.voltage.push(tool.voltage);
      res.frequency.push(tool.frequency);
      res.current.push(tool.current);
      res.power.push(tool.power);
      res.powerF.push(tool.powerF);
    });

    // filter data
    res.voltage = getLastData(res.voltage, 10);
    res.frequency = getLastData(res.frequency, 10);
    res.current = getLastData(res.current, 10);
    res.power = getLastData(res.power, 10);
    res.powerF = getLastData(res.powerF, 10);
    res.time = getLastData(res.time, 10);

    return res;
  };

  const getSeries = (graphData) => {
    const tempSeries = [
      {
        name: "voltage",
        data: graphData.voltage,
      },
      {
        name: "frequency",
        data: graphData.frequency,
      },
      {
        name: "current",
        data: graphData.current,
      },
      {
        name: "power",
        data: graphData.power,
      },
      {
        name: "powerF",
        data: graphData.powerF,
      },
    ];

    return tempSeries;
  };

  const getOptions = (dataTime, optionsData) => {
    let temp = dataTime.map((item) => {
      const date = new Date(item);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    });
    const options = {
      ...optionsData,
      xaxis: {
        min: () => {
          return dataTime[dataTime.length - 6];
        },
        max: () => {
          return dataTime[dataTime.length - 1];
        },
        categories: [...temp],
      },
    };
    return options;
  };

  return {
    chart,
    tools0,
    tools1,
    isChange0,
    isChange1,
    getGraph,
    getSeries,
    getOptions,
  };
});
