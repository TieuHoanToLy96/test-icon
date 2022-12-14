<script>
export default {
  name: 'traffic-sign',
  props: {
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 1.7
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0883 13.5L16.3383 11.25M16.3383 11.25L14.0883 8.99999M16.3383 11.25H11.0883C10.4915 11.25 9.91923 11.487 9.49728 11.909C9.07532 12.331 8.83827 12.9033 8.83827 13.5V14.25M2.2436 11.4697L12.0579 1.65532C12.3508 1.36243 12.8257 1.36243 13.1186 1.65532L22.9329 11.4697C23.2258 11.7626 23.2258 12.2374 22.9329 12.5303L13.1186 22.3447C12.8257 22.6376 12.3508 22.6376 12.0579 22.3447L2.2436 12.5303C1.9507 12.2374 1.9507 11.7626 2.2436 11.4697Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    