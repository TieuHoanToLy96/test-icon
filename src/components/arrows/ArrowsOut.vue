<script>
export default {
  name: 'arrows-out',
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
<path d="M15.75 4.5H19.5M19.5 4.5V8.25M19.5 4.5L14.25 9.75M8.25 19.5H4.5M4.5 19.5V15.75M4.5 19.5L9.75 14.25M19.5 15.75V19.5M19.5 19.5H15.75M19.5 19.5L14.25 14.25M4.5 8.25V4.5M4.5 4.5H8.25M4.5 4.5L9.75 9.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    