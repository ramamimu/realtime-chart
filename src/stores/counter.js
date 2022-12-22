import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const tools0 = ref([]);
  const tools1 = ref([]);

  return { tools0, tools1 };
});
