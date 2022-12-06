<script>
export default {
  name: 'speedboat-svg',
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
<path d="M3 17H16.4C16.8949 17.0002 17.3822 16.8779 17.8184 16.6441C18.2546 16.4103 18.6262 16.0722 18.9 15.66L22 11H15.77C15.2594 11.0007 14.7536 11.0991 14.28 11.29L10.72 12.71C10.2464 12.9009 9.74062 12.9993 9.23 13H5.5H4.5L3 17V17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13L7.5 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8H14L16 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    