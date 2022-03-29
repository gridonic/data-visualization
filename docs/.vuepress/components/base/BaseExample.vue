<template>
  <div>
    <input type="range" v-model="radius" min="5" max="50">
    <input type="range" v-model="margin" min="0" max="50">
    <label>
      <input type="checkbox" v-model="showBoundaries">
      <span>Show Boundaries</span>
    </label>
    <Base
        :height="100"
        v-model:width="width"
        :boundaries="showBoundaries"
        :margin="{ 'top': Number(margin), 'left': Number(margin), 'bottom': Number(margin), 'right': Number(margin)}"
    >
      <circle :r="radius" :cx="cx" cy="50" fill="var(--c-brand)"/>
    </Base>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import Base from '@Base';

const radius = ref(25);
const margin = ref(25);
const width = ref(null);
const cx = computed(() => width.value / 2);
const showBoundaries = ref(true);
</script>
