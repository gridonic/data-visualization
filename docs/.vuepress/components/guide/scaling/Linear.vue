<template>
  <div>
    <span>{{ min }}</span>
    <input type="range" v-model="model" :min="min" :max="max">
    <span>{{ max }}</span>
    <Base v-model:width="width" :height="height" boundaries>
      <text
          class="info-text"
          :x="xScale(model)"
          :y="height / 2"
          text-anchor="middle"
          dy="-8"
      >{{ model }}</text>
      <text
          class="info-text"
          :x="xScale(model)"
          :y="height / 2"
          text-anchor="middle"
          dy="16"
      >{{ xScale(model) }}</text>
      <circle
          r="5"
          fill="var(--c-brand)"
          :cx="xScale(model)"
          :cy="height / 2"
      />
    </Base>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { scaleLinear } from 'd3';
import Base from '@Base';

const model = ref(10);
const width = ref(null);
const height = ref(40);
const min = 0;
const max = 100;

const xScale = computed(() => {
  return scaleLinear()
      .domain([min, max])
      .range([0, width.value]);
});
</script>
<style scoped>
.info-text {
  font-size: 8px;
}
</style>

