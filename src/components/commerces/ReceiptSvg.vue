<script>
export default {
  name: 'receipt-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36029 9.75H17.1103M7.36029 12.75H17.1103M3.23529 19.5V5.25C3.23529 5.05109 3.31431 4.86032 3.45496 4.71967C3.59561 4.57902 3.78638 4.5 3.98529 4.5H20.4853C20.6842 4.5 20.875 4.57902 21.0156 4.71967C21.1563 4.86032 21.2353 5.05109 21.2353 5.25V19.5L18.2353 18L15.2353 19.5L12.2353 18L9.23529 19.5L6.23529 18L3.23529 19.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    