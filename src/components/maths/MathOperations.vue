<script>
export default {
  name: 'math-operations',
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
<path d="M3.41174 17.2619H9.9572M6.68447 14.0238V20.5M9.9572 5.92857H3.41174M21.4117 15.6496H14.8663M21.4117 18.8742H14.8663M20.5936 3.5L15.6845 8.35714M20.5936 8.35714L15.6845 3.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    