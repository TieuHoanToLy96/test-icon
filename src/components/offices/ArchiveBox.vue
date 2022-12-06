<script>
export default {
  name: 'archive-box',
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
<path d="M4.63232 6.75V19.5C4.63232 19.6989 4.71134 19.8897 4.85199 20.0303C4.99265 20.171 5.18341 20.25 5.38232 20.25H20.3823C20.5812 20.25 20.772 20.171 20.9127 20.0303C21.0533 19.8897 21.1323 19.6989 21.1323 19.5V6.75M4.63232 6.75L6.13232 3.75H19.6323L21.1323 6.75M4.63232 6.75H21.1323M9.70036 14.068L12.8823 17.25M12.8823 17.25L16.0643 14.068M12.8823 17.25V9.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    