<template>
  <div :class="props.class" ref="root">
    <svg
        :width="containerWidth"
        :height="containerHeight"
        xmlns="http://www.w3.org/2000/svg"
    >
      <slot name="defs"></slot>

      <slot name="right"></slot>

      <g :transform="`translate(${props.margin.top} ${props.margin.left})`">
        <g v-if="props.boundaries || props.boundaries === ''" class="boundary-container">
          <rect
              :width="width"
              :height="height"
              stroke="lightgrey"
              stroke-width="1"
              stroke-dasharray="5"
              stroke-dashoffset="2"
              fill="none"
          />
          <circle r="2" cx="0" cy="0" fill="grey"/>
          <text class="info-text" x="0" y="0" text-anchor="middle" dy="-4">0/0</text>

          <circle r="2" :cx="width" :cy="0" fill="grey"/>
          <text class="info-text" :x="width" :y="0" text-anchor="middle" dy="-4">{{ width }}/0</text>

          <circle r="2" cx="0" :cy="height" fill="grey"/>
          <text class="info-text" x="0" :y="height" text-anchor="middle" dy="10">0/{{ height }}</text>

          <circle r="2" :cx="width" :cy="height" fill="grey"/>
          <text class="info-text" :x="width" :y="height" text-anchor="middle" dy="10">{{ width }}/{{ height }}</text>
        </g>
        <slot></slot>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
const emit = defineEmits(['update:width', 'update:height']);

interface Props {
  width?: Number;
  height?: Number;
  class?: String,
  margin?: {
    top?: Number;
    left?: Number;
    right?: Number;
    bottom?: Number;
  };
  boundaries?: Boolean;
}
const props = withDefaults(defineProps<Props>(), {
  boundaries: false,
  class: 'base-component',
  width: null,
  height: null,
  margin: {
    top: 50,
    left: 50,
    right: 50,
    bottom: 50
  }
});

const root = ref(null);
const availableXSpace = ref(null);
const availableYSpace = ref(null);
const isYResponsive = ref(true);
const isXResponsive = ref(true);

const width = ref(0);
const containerWidth = ref(0);

const height = ref(0);
const containerHeight = ref(0);

onMounted(() => {
  isXResponsive.value = props.width === 0 || props.width === undefined || props.width === null;
  isYResponsive.value = props.height === 0 || props.height === undefined || props.height === null;
  window.addEventListener('resize', onResize);
  onResize();
});

const onResize = () => {
  nextTick(() => {
    if (root.value) {
      availableXSpace.value = parseInt(window.getComputedStyle(root.value).width, 10);
      availableYSpace.value = parseInt(window.getComputedStyle(root.value).height, 10);
    }
  })
}

watch(availableXSpace, () => {
  updateDimensions();
})
watch(availableYSpace, () => {
  updateDimensions();
})
watch(props, () => {
  updateDimensions();
})

const updateDimensions = () => {
  onResize();
  if (root.value) {

    if (isXResponsive.value) {
      width.value = 0;
      containerWidth.value = 0;
      nextTick(() => {
        containerWidth.value = availableXSpace.value;
        width.value = containerWidth.value - props.margin.left - props.margin.right;
        emit('update:width', width.value);
      })
    } else {
      containerWidth.value = props.width + props.margin.left + props.margin.right;
      width.value = props.width;
    }

    if (isYResponsive.value) {
      height.value = 0;
      containerHeight.value = 0;
      nextTick(() => {
        containerHeight.value = availableYSpace.value;
        height.value = containerHeight.value - props.margin.top - props.margin.bottom;
        emit('update:height', height.value);
      })

    } else {
      containerHeight.value = props.height + props.margin.top + props.margin.bottom;
      height.value = props.height;
    }


  }
}

</script>
<style scoped>
.base-component {
  width: 100%;
  margin: 1rem 0;
}
.base-component > svg {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: block;
}
.info-text {
  font-size: 8px;
}
</style>
