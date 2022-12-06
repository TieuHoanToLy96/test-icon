<script>
export default {
  name: 'album-none',
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
<path d="M4 7.5H7.5M4 12.5H7.5M4 17H7.5M15.5 4H19.5C20.0523 4 20.5 4.44772 20.5 5V16.5M15.5 4H6.5C5.94772 4 5.5 4.44772 5.5 5V19.5C5.5 20.0523 5.94772 20.5 6.5 20.5H19.5C20.0523 20.5 20.5 20.0523 20.5 19.5V19.5M15.5 4C15.6298 4.90883 15.3147 6.52563 13.4672 7.19588C12.6926 7.47692 12.2056 8.44076 12.7 9.1L20.5 19.5M15.5 4L20.5 16.5M20.5 19.5V16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round"/>
</svg>

</template>
    