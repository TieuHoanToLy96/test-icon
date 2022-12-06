<script>
export default {
  name: 'arrow-sharp-turn-left',
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
<path d="M17 18V6.69004C17 6.55159 16.959 6.41624 16.882 6.30112C16.8051 6.18599 16.6958 6.09626 16.5679 6.04328C16.44 5.99029 16.2992 5.97643 16.1634 6.00344C16.0276 6.03046 15.9029 6.09713 15.805 6.19504L6 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 16H6V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    