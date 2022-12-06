<script>
export default {
  name: 'clock-afternoon',
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
<path d="M18.0735 12H12.8235L16.5358 15.7123M21.8235 12C21.8235 16.9706 17.7941 21 12.8235 21C7.85292 21 3.82349 16.9706 3.82349 12C3.82349 7.02944 7.85292 3 12.8235 3C17.7941 3 21.8235 7.02944 21.8235 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    