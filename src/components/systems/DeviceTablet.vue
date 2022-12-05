<script>
export default {
  name: 'device-tablet',
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
<path d="M4.97046 6H19.9705M4.97046 18H19.9705M19.9705 4.5V19.5C19.9705 20.3284 19.2989 21 18.4705 21H6.47046C5.64203 21 4.97046 20.3284 4.97046 19.5V4.5C4.97046 3.67157 5.64203 3 6.47046 3H18.4705C19.2989 3 19.9705 3.67157 19.9705 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    