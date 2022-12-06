<script>
export default {
  name: 'faders-svg',
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
<path d="M12.2354 11.25L12.2354 20.25M12.2354 3.75L12.2354 8.25M18.9854 18.75L18.9855 20.25M18.9855 3.75L18.9854 15.75M21.2354 15.75H16.7354M5.48539 15.75L5.4853 20.25M5.4853 3.75L5.48539 12.75M3.23535 12.75H7.73535M14.4854 8.25H9.98535" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    