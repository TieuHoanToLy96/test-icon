<script>
export default {
  name: 'square-svg',
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
<path d="M20.1818 3H3.81818C3.36631 3 3 3.36631 3 3.81818V20.1818C3 20.6337 3.36631 21 3.81818 21H20.1818C20.6337 21 21 20.6337 21 20.1818V3.81818C21 3.36631 20.6337 3 20.1818 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    