<script>
export default {
  name: 'backspace-svg',
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
<path d="M15.4705 9.75L10.9705 14.25M15.4705 14.25L10.9705 9.75M6.25198 19.1359L1.97046 12L6.25198 4.86412C6.31862 4.75307 6.41288 4.66116 6.52558 4.59735C6.63828 4.53354 6.76559 4.5 6.8951 4.5H20.7205C20.9194 4.5 21.1101 4.57902 21.2508 4.71967C21.3914 4.86032 21.4705 5.05109 21.4705 5.25V18.75C21.4705 18.9489 21.3914 19.1397 21.2508 19.2803C21.1101 19.421 20.9194 19.5 20.7205 19.5H6.8951C6.76559 19.5 6.63828 19.4665 6.52558 19.4027C6.41288 19.3388 6.31862 19.2469 6.25198 19.1359Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    