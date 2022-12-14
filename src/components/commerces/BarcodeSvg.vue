<script>
export default {
  name: 'barcode-svg',
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
<path d="M17.4853 4.5H21.2353V8.25M6.98529 19.5H3.23529V15.75M21.2353 15.75V19.5H17.4853M3.23529 8.25V4.5H6.98529M7.73529 8.25V15.75M16.7353 8.25V15.75M13.7353 8.25V15.75M10.7353 8.25V15.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    