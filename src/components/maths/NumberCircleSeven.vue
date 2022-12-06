<script>
export default {
  name: 'number-circle-seven',
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
<path d="M10.3383 7.875H14.8383L11.8383 16.875M21.5883 12C21.5883 16.9706 17.5588 21 12.5883 21C7.61769 21 3.58826 16.9706 3.58826 12C3.58826 7.02944 7.61769 3 12.5883 3C17.5588 3 21.5883 7.02944 21.5883 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    