<script>
export default {
  name: 'layout-svg',
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
<path d="M10.6323 9.75V19.5M3.88232 9.75H21.8823M4.63232 4.5H21.1323C21.5465 4.5 21.8823 4.83579 21.8823 5.25V18.75C21.8823 19.1642 21.5465 19.5 21.1323 19.5H4.63232C4.21811 19.5 3.88232 19.1642 3.88232 18.75V5.25C3.88232 4.83579 4.21811 4.5 4.63232 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    