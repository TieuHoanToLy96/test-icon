<script>
export default {
  name: 'brand-asana',
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
<path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 19C18.6569 19 20 17.6569 20 16C20 14.3431 18.6569 13 17 13C15.3431 13 14 14.3431 14 16C14 17.6569 15.3431 19 17 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 19C8.65685 19 10 17.6569 10 16C10 14.3431 8.65685 13 7 13C5.34315 13 4 14.3431 4 16C4 17.6569 5.34315 19 7 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    