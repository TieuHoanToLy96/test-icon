<script>
export default {
  name: 'exposure-0',
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
<path d="M12 19C13.0609 19 14.0783 18.5786 14.8284 17.8284C15.5786 17.0783 16 16.0609 16 15V9C16 7.93913 15.5786 6.92172 14.8284 6.17157C14.0783 5.42143 13.0609 5 12 5C10.9391 5 9.92172 5.42143 9.17157 6.17157C8.42143 6.92172 8 7.93913 8 9V15C8 16.0609 8.42143 17.0783 9.17157 17.8284C9.92172 18.5786 10.9391 19 12 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    