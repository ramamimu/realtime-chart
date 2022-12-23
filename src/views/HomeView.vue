<script setup>
import DynamicChart from "../components/dynamicChart.vue";
import Filter from "../components/filter.vue";
</script>

<template>
  <main
    class="h-screen flex gap-2 flex-col justify-center items-center bg-slate-700"
  >
    <div class="">
      <Filter></Filter>
    </div>
    <div class="grid grid-cols-2 w-full">
      <div class="w-[90%] mx-auto bg-gray-900 p-2 pt-3 rounded-md">
        <DynamicChart :typeData="0" title="modul 1" />
      </div>
      <div class="w-[90%] mx-auto bg-gray-900 p-2 pt-3 rounded-md">
        <DynamicChart :typeData="1" title="modul 2" />
      </div>
    </div>
  </main>
</template>
