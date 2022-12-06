<script>
export default {
  name: 'motorbike-svg',
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
<path d="M5 19C6.65685 19 8 17.6569 8 16C8 14.3431 6.65685 13 5 13C3.34315 13 2 14.3431 2 16C2 17.6569 3.34315 19 5 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19C20.6569 19 22 17.6569 22 16C22 14.3431 20.6569 13 19 13C17.3431 13 16 14.3431 16 16C16 17.6569 17.3431 19 19 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 14H12.5L16.5 10H6M7.5 14L11.5 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 6H15L16.5 9L18.5 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    