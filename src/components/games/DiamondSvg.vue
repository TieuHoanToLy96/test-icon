<script>
export default {
  name: 'diamond-svg',
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
<path d="M11.7637 2.40533L2.6994 11.4697C2.4065 11.7626 2.4065 12.2374 2.6994 12.5303L11.7637 21.5947C12.0566 21.8876 12.5315 21.8876 12.8244 21.5947L21.8887 12.5303C22.1816 12.2374 22.1816 11.7626 21.8887 11.4697L12.8244 2.40533C12.5315 2.11244 12.0566 2.11244 11.7637 2.40533Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    