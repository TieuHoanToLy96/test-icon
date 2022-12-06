<script>
export default {
  name: 'prohibit-svg',
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
<path d="M6.45684 5.63604L19.1848 18.364M21.8208 12C21.8208 16.9706 17.7914 21 12.8208 21C7.85024 21 3.8208 16.9706 3.8208 12C3.8208 7.02944 7.85024 3 12.8208 3C17.7914 3 21.8208 7.02944 21.8208 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    