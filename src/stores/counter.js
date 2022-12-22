import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const tools0 = ref([]);
  const tools1 = ref([]);

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

    tools.value.forEach((tool) => {
      res.time.push(tool.time);
      res.voltage.push(tool.voltage);
      res.frequency.push(tool.frequency);
      res.current.push(tool.current);
      res.power.push(tool.power);
      res.powerF.push(tool.powerF);
    });

    return res;
  };

  return { tools0, tools1, getGraph };
});
