<script>
export default {
  name: 'math-integral',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21C11 21 11 17 12 12C13 7 13 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    