<script>
export default {
  name: 'popup2-svg',
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
<path d="M15.6364 11H8.36364C8.16281 11 8 11.1018 8 11.2273V15.7727C8 15.8982 8.16281 16 8.36364 16H15.6364C15.8372 16 16 15.8982 16 15.7727V11.2273C16 11.1018 15.8372 11 15.6364 11Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.5H21M3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25V18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75V5.25C3 4.83579 3.33579 4.5 3.75 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    