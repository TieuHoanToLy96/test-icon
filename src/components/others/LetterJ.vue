<script>
export default {
  name: 'letter-j',
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
<path d="M17 4V16C17 17.0609 16.5786 18.0783 15.8284 18.8284C15.0783 19.5786 14.0609 20 13 20H11C9.93913 20 8.92172 19.5786 8.17157 18.8284C7.42143 18.0783 7 17.0609 7 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    