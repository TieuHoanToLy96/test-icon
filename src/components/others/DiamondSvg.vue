<script>
export default {
  name: 'diamond-svg',
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
<path d="M6 5H18L21 10L12.5 19.5C12.4348 19.5665 12.357 19.6194 12.2712 19.6554C12.1853 19.6915 12.0931 19.7101 12 19.7101C11.9069 19.7101 11.8147 19.6915 11.7288 19.6554C11.643 19.6194 11.5652 19.5665 11.5 19.5L3 10L6 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12L8 9.80005L8.6 8.80005" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    