import { ref } from "vue";
import { defineStore } from "pinia";

export const useChartStore = defineStore("chart", () => {
  const tools0 = ref([]);
  const isChange0 = ref(false);

  const tools1 = ref([]);
  const isChange1 = ref(false);

  const chart = ref();

  const setTimeFormat = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const getLastData = (arr, range) => {
    return arr.length > range ? arr.slice(arr.length - range, arr.length) : arr;
  };

  const getGraph = (index, range) => {
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
    res.voltage = getLastData(res.voltage, range);
    res.frequency = getLastData(res.frequency, range);
    res.current = getLastData(res.current, range);
    res.power = getLastData(res.power, range);
    res.powerF = getLastData(res.powerF, range);
    res.time = getLastData(res.time, range);

    return res;
  };

  const getSeries = (graphData, picked) => {
    const tempSeries = [];
    if (picked == "voltage") {
      tempSeries.push({
        name: "voltage",
        data: graphData.voltage,
      });
    }
    if (picked == "frequency") {
      tempSeries.push({
        name: "frequency",
        data: graphData.frequency,
      });
    }
    if (picked == "current") {
      tempSeries.push({
        name: "current",
        data: graphData.current,
      });
    }
    if (picked == "power") {
      tempSeries.push({
        name: "power",
        data: graphData.power,
      });
    }
    if (picked == "powerF") {
      tempSeries.push({
        name: "powerF",
        data: graphData.powerF,
      });
    }
    return tempSeries;
  };

  const getOptions = (dataTime, optionsData) => {
    let temp = dataTime.map((item) => {
      const date = new Date(item);
      return `${setTimeFormat(date.getHours())}:${setTimeFormat(
        date.getMinutes()
      )}:${setTimeFormat(date.getSeconds())}`;
    });
    const options = {
      ...optionsData,
      xaxis: {
        min: () => {
          return dataTime[0];
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
    setTimeFormat,
  };
});
