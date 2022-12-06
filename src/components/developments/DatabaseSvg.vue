<script>
export default {
  name: 'database-svg',
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
<path d="M20.3676 7.5C20.3676 9.98528 16.6739 12 12.1176 12C7.5612 12 3.86755 9.98528 3.86755 7.5M20.3676 7.5C20.3676 5.01472 16.6739 3 12.1176 3C7.5612 3 3.86755 5.01472 3.86755 7.5M20.3676 7.5V12M3.86755 7.5V12M3.86755 12C3.86755 14.4853 7.5612 16.5 12.1176 16.5C16.6739 16.5 20.3676 14.4853 20.3676 12M3.86755 12V16.5C3.86755 18.9853 7.5612 21 12.1176 21C16.6739 21 20.3676 18.9853 20.3676 16.5V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    