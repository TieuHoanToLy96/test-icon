<script>
export default {
  name: 'ruler-svg',
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
<path d="M12.375 5.62499L15.375 8.62499M9.00001 8.99999L12 12M5.62501 12.375L8.62501 15.375M2.78034 15.2197L15.2197 2.78032C15.5126 2.48743 15.9874 2.48743 16.2803 2.78032L21.2197 7.71966C21.5126 8.01256 21.5126 8.48743 21.2197 8.78032L8.78034 21.2197C8.48744 21.5126 8.01257 21.5126 7.71968 21.2197L2.78034 16.2803C2.48745 15.9874 2.48745 15.5126 2.78034 15.2197Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    