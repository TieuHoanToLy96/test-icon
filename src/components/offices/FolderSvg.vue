<script>
export default {
  name: 'folder-svg',
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
<path d="M3.23535 7.5V18.8077C3.23589 18.9911 3.309 19.1669 3.43872 19.2966C3.56843 19.4264 3.74421 19.4995 3.92766 19.5H20.5687C20.7455 19.5 20.9151 19.4298 21.0401 19.3047C21.1651 19.1797 21.2354 19.0101 21.2354 18.8333V8.25C21.2354 8.05109 21.1563 7.86032 21.0157 7.71967C20.875 7.57902 20.6843 7.5 20.4854 7.5H3.23535ZM3.23535 7.5V5.25C3.23535 5.05109 3.31437 4.86032 3.45502 4.71967C3.59567 4.57902 3.78644 4.5 3.98535 4.5H8.92469C9.02318 4.5 9.12071 4.5194 9.21171 4.55709C9.3027 4.59478 9.38538 4.65003 9.45502 4.71967L12.2354 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    