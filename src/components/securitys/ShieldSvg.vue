<script>
export default {
  name: 'shield-svg',
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
<path d="M3.75 10.75V5.25C3.75 5.05109 3.82902 4.86032 3.96967 4.71967C4.11032 4.57902 4.30109 4.5 4.5 4.5H19.5C19.6989 4.5 19.8897 4.57902 20.0303 4.71967C20.171 4.86032 20.25 5.05109 20.25 5.25V10.75C20.25 18.6264 13.5651 21.236 12.2303 21.6785C12.0811 21.7298 11.9189 21.7298 11.7697 21.6785C10.4349 21.236 3.75 18.6264 3.75 10.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    