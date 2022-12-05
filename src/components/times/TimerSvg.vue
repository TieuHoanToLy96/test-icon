<script>
export default {
  name: 'timer-svg',
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
<path d="M12.5291 12L16.2414 8.28769M10.2791 0.75H14.7791M20.7791 12C20.7791 16.5564 17.0854 20.25 12.5291 20.25C7.9727 20.25 4.27905 16.5564 4.27905 12C4.27905 7.44365 7.9727 3.75 12.5291 3.75C17.0854 3.75 20.7791 7.44365 20.7791 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    