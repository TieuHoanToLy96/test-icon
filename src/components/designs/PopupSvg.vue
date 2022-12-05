<script>
export default {
  name: 'popup-svg',
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
<path d="M6.9375 6.375V16.0625C6.9375 16.6148 7.38522 17.0625 7.9375 17.0625H17.0625M6.9375 6.375V4C6.9375 3.44772 7.38522 3 7.9375 3H20C20.5523 3 21 3.44772 21 4V16.0625C21 16.6148 20.5523 17.0625 20 17.0625H17.0625M6.9375 6.375H4C3.44772 6.375 3 6.82272 3 7.375V20C3 20.5523 3.44772 21 4 21H16.0625C16.6148 21 17.0625 20.5523 17.0625 20V17.0625M12.5625 6.375H16.0625C16.6148 6.375 17.0625 6.82272 17.0625 7.375V10.875" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round"/>
</svg>

</template>
    