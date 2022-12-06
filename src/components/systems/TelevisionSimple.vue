<script>
export default {
  name: 'television-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.32349 2.25L12.8235 6.75L17.3235 2.25M4.57349 6.75H21.0735C21.4877 6.75 21.8235 7.08579 21.8235 7.5V18.75C21.8235 19.1642 21.4877 19.5 21.0735 19.5H4.57349C4.15927 19.5 3.82349 19.1642 3.82349 18.75V7.5C3.82349 7.08579 4.15927 6.75 4.57349 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    