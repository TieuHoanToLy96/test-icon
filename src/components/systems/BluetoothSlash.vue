<script>
export default {
  name: 'bluetooth-slash',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.95502 16.5003L11.955 12.0003M11.955 12.0003L11.955 21.0003L17.2663 17.0168M11.955 12.0003L14.3146 13.7699M5.20557 3.75002L20.2056 20.25M11.955 6.71459V3.00031L17.955 7.50031L14.8121 9.85746" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    