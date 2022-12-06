<script>
export default {
  name: 'xcircle-svg',
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
<path d="M15.647 9L9.64697 15M15.647 15L9.64697 9M21.647 12C21.647 16.9706 17.6175 21 12.647 21C7.67641 21 3.64697 16.9706 3.64697 12C3.64697 7.02944 7.67641 3 12.647 3C17.6175 3 21.647 7.02944 21.647 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    