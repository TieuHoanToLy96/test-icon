<script>
export default {
  name: 'push-pin-simple-slash',
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
<path d="M9.43666 3.75H18.8823M12.8823 16.5V22.5M5.38232 3.75L20.3823 20.25M17.3823 3.75L19.2962 14.5955M16.9732 16.5H4.63232M6.13232 16.5L7.89464 6.51355" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    