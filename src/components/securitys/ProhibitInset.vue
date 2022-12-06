<script>
export default {
  name: 'prohibit-inset',
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
<path d="M9.34835 9.34872L14.6517 14.652M21 12.0004C21 16.9709 16.9706 21.0004 12 21.0004C7.02944 21.0004 3 16.9709 3 12.0004C3 7.0298 7.02944 3.00037 12 3.00037C16.9706 3.00037 21 7.0298 21 12.0004Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    