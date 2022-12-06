<script>
export default {
  name: 'crosshair-simple',
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
<path d="M21.2133 12C21.2133 16.7635 17.3517 20.625 12.5883 20.625M21.2133 12C21.2133 7.23654 17.3517 3.375 12.5883 3.375M21.2133 12H17.4633M12.5883 20.625C7.8248 20.625 3.96326 16.7635 3.96326 12M12.5883 20.625V16.875M3.96326 12C3.96326 7.23654 7.8248 3.375 12.5883 3.375M3.96326 12H7.71326M12.5883 3.375V7.125" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    