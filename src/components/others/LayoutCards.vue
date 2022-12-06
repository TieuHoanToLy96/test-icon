<script>
export default {
  name: 'layout-cards',
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
<path d="M8 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 4H16C14.8954 4 14 4.89543 14 6V12C14 13.1046 14.8954 14 16 14H18C19.1046 14 20 13.1046 20 12V6C20 4.89543 19.1046 4 18 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    