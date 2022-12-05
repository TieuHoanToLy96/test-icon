<script>
export default {
  name: 'browser-svg',
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
<path d="M3.82349 9H21.8235M4.57349 4.5H21.0735C21.4877 4.5 21.8235 4.83579 21.8235 5.25V18.75C21.8235 19.1642 21.4877 19.5 21.0735 19.5H4.57349C4.15927 19.5 3.82349 19.1642 3.82349 18.75V5.25C3.82349 4.83579 4.15927 4.5 4.57349 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    