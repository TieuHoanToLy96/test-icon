<script>
export default {
  name: 'brand-tidal',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.333 6L8.667 9.25L12 6L15.333 9.25L18.667 6L22 9.25L18.667 12.5L15.333 9.25L12 12.5L15.333 15.75L12 19L8.667 15.75L12 12.5L8.667 9.25L5.333 12.5L2 9.25L5.333 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    