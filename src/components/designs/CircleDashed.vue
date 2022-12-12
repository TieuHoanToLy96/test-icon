<script>
export default {
  name: 'circle-dashed',
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
<path d="M3.95233 9.67024C4.35987 8.14347 5.16401 6.75167 6.28315 5.63604M6.28209 18.365C5.16364 17.2487 4.36037 15.8564 3.95378 14.3294M14.9769 20.6948C13.4509 21.1052 11.8435 21.1047 10.3177 20.6933M21.3419 14.3298C20.9344 15.8565 20.1302 17.2483 19.0111 18.364M19.0121 5.63498C20.1306 6.7513 20.9339 8.14361 21.3404 9.67063M10.3174 3.30522C11.8433 2.89478 13.4507 2.89528 14.9765 3.30667" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    