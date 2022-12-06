<script>
export default {
  name: 'letter-u',
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
<path d="M6 4V15C6 16.3261 6.52678 17.5979 7.46447 18.5355C8.40215 19.4732 9.67392 20 11 20H13C14.3261 20 15.5979 19.4732 16.5355 18.5355C17.4732 17.5979 18 16.3261 18 15V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    