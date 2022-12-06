<script>
export default {
  name: 'check-square',
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
<path d="M16.6541 9.75L11.154 15L8.40405 12.375M5.02905 3.75H20.0291C20.4433 3.75 20.7791 4.08579 20.7791 4.5V19.5C20.7791 19.9142 20.4433 20.25 20.0291 20.25H5.02905C4.61484 20.25 4.27905 19.9142 4.27905 19.5V4.5C4.27905 4.08579 4.61484 3.75 5.02905 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    