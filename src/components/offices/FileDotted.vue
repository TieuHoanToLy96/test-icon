<script>
export default {
  name: 'file-dotted',
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
<path d="M6.98535 21H5.48462C5.28571 21 5.09494 20.921 4.95429 20.7803C4.81364 20.6397 4.73462 20.4489 4.73462 20.25V17.25M11.4854 3H14.4854M14.4854 3L19.7354 8.25M14.4854 3V8.25H19.7354M19.7354 8.25V12.75M4.73462 6V3.75C4.73462 3.55109 4.81364 3.36032 4.95429 3.21967C5.09494 3.07902 5.28571 3 5.48462 3H7.73535M19.7354 16.5V20.25C19.7354 20.4489 19.6563 20.6397 19.5157 20.7803C19.375 20.921 19.1843 21 18.9854 21H18.2354M4.73535 9.75V13.5M10.7354 21H14.4854" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    