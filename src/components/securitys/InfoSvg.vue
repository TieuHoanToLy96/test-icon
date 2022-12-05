<script>
export default {
  name: 'info-svg',
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
<path d="M11.4237 11.25H12.1738L12.1737 16.5H12.9237M21.1738 12C21.1738 16.9706 17.1444 21 12.1738 21C7.20327 21 3.17383 16.9706 3.17383 12C3.17383 7.02944 7.20327 3 12.1738 3C17.1444 3 21.1738 7.02944 21.1738 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9855 8.8125C12.5028 8.8125 12.9221 8.39277 12.9221 7.875C12.9221 7.35723 12.5028 6.9375 11.9855 6.9375C11.4682 6.9375 11.0488 7.35723 11.0488 7.875C11.0488 8.39277 11.4682 8.8125 11.9855 8.8125Z" fill="currentColor"/>
</svg>

</template>
    