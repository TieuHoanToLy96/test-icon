<script>
export default {
  name: 'arrow-fat-up',
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
<path d="M3 11.25L12 2.25L21 11.25H16.5V19.5C16.5 19.6989 16.421 19.8897 16.2803 20.0303C16.1397 20.171 15.9489 20.25 15.75 20.25H8.25C8.05109 20.25 7.86032 20.171 7.71967 20.0303C7.57902 19.8897 7.5 19.6989 7.5 19.5V11.25H3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    