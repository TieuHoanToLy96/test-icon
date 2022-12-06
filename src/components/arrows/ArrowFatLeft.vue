<script>
export default {
  name: 'arrow-fat-left',
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
<path d="M11.25 3L2.25 12L11.25 21V16.5H19.5C19.6989 16.5 19.8897 16.421 20.0303 16.2803C20.171 16.1397 20.25 15.9489 20.25 15.75V8.25C20.25 8.05109 20.171 7.86032 20.0303 7.71967C19.8897 7.57902 19.6989 7.5 19.5 7.5H11.25V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    