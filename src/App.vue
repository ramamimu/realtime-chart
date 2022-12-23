<script setup>
import { onMounted } from "vue";
import { useChartStore } from "./stores/chart";

const chartStore = useChartStore();

const isEqual = (a, b) => {
  if (a.toString() !== b.toString()) {
    return false;
  }
  return true;
};

const getTools = async () => {
  try {
    await fetch("http://localhost:8989/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let tempTools0 = data.filter((item) => item.type === 0);
        let tempTools1 = data.filter((item) => item.type === 1);

        tempTools0.sort((a, b) => {
          return a.time - b.time;
        });

        tempTools1.sort((a, b) => {
          return a.time - b.time;
        });

        if (!isEqual(tempTools0, chartStore.tools0)) {
          chartStore.tools0 = [...tempTools0];
          chartStore.isChange0 = true;
        } else {
          chartStore.isChange0 = false;
        }

        if (!isEqual(tempTools1, chartStore.tools1)) {
          chartStore.tools1 = [...tempTools1];
          chartStore.isChange1 = true;
        } else {
          chartStore.isChange1 = false;
        }
      });
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await getTools();
  setInterval(async () => {
    await getTools();
  }, 3000);
});
</script>

<template>
  <RouterView />
  <h1>Hello world</h1>
  <h2>Hello world</h2>
</template>
