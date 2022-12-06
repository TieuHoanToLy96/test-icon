<script>
export default {
  name: 'desktop-svg',
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
<path d="M15.647 21H9.64697M3.64697 14.25H21.647M12.647 18V21M20.147 18H5.14697C4.31855 18 3.64697 17.3284 3.64697 16.5V6C3.64697 5.17157 4.31855 4.5 5.14697 4.5H20.147C20.9754 4.5 21.647 5.17157 21.647 6V16.5C21.647 17.3284 20.9754 18 20.147 18Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    