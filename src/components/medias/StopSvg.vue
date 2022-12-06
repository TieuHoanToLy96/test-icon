<script>
export default {
  name: 'stop-svg',
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
<path d="M18.8301 4.875H5.87551C5.51778 4.875 5.22778 5.165 5.22778 5.52273V18.4773C5.22778 18.835 5.51778 19.125 5.87551 19.125H18.8301C19.1878 19.125 19.4778 18.835 19.4778 18.4773V5.52273C19.4778 5.165 19.1878 4.875 18.8301 4.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    