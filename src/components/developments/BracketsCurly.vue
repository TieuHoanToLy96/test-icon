<script>
export default {
  name: 'brackets-curly',
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
<path d="M7.55878 3.75C1.55878 3.75 7.55878 12 1.55878 12C7.55878 12 1.55878 20.25 7.55878 20.25M16.5588 3.75C22.5588 3.75 16.5588 12 22.5588 12C16.5588 12 22.5588 20.25 16.5588 20.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    