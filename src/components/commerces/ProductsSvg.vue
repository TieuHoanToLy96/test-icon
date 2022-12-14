<script>
export default {
  name: 'products-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54545 3H4.30909C3.5861 3 3 3.5861 3 4.30909V19.6909C3 20.4139 3.5861 21 4.30909 21H19.6909C20.4139 21 21 20.4139 21 19.6909V4.30909C21 3.5861 20.4139 3 19.6909 3H14.4545M9.54545 3V6.6C9.54545 7.32299 10.1316 7.90909 10.8545 7.90909H13.1455C13.8684 7.90909 14.4545 7.32299 14.4545 6.6V3M9.54545 3H14.4545M6.76364 13.3091H10.6909M6.76364 17.2364H13.3091" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round"/>
</svg>

</template>
    