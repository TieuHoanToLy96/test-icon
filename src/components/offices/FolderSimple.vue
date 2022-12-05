<script>
export default {
  name: 'folder-simple',
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
<path d="M21.2354 8.25V18.8333C21.2354 19.0101 21.1651 19.1797 21.0401 19.3047C20.9151 19.4298 20.7455 19.5 20.5687 19.5H3.98535C3.78644 19.5 3.59567 19.421 3.45502 19.2803C3.31437 19.1397 3.23535 18.9489 3.23535 18.75V6C3.23535 5.80109 3.31437 5.61032 3.45502 5.46967C3.59567 5.32902 3.78644 5.25 3.98535 5.25H8.98535C9.14763 5.25 9.30553 5.30263 9.43535 5.4L12.0354 7.35C12.1652 7.44737 12.3231 7.5 12.4854 7.5H20.4854C20.6843 7.5 20.875 7.57902 21.0157 7.71967C21.1563 7.86032 21.2354 8.05109 21.2354 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    