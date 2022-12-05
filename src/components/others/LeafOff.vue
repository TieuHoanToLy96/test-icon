<script>
export default {
  name: 'leaf-off',
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
<path d="M5 20.9999C5.475 16.7299 7.3 13.3599 11.331 11.3169" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.61796 6.623C4.74396 8.248 3.99296 10.5 3.98596 13C3.98596 14 3.98596 16 5.98596 18H8.99996C11.733 18 14.092 17.365 15.92 15.913M17.819 13.814C19.043 11.942 19.806 9.38 20 6V4H15.986C13.123 4 10.868 4.405 9.12496 5.118" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    