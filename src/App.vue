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
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
