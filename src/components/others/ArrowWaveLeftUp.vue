<script>
export default {
  name: 'arrow-wave-left-up',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 9.99609H3V13.9961" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 11.9959C20.113 10.7109 18.52 9.96292 17 9.99592C15.48 9.96292 13.887 10.7109 13 11.9959C12.113 13.2799 10.52 14.0289 9 13.9959C7.48 14.0289 6 12.9959 5 11.9959L3 9.99592" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    