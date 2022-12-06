<script>
export default {
  name: 'arrows-in-cardinal',
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
<path d="M14.6516 17.6516L12 15M12 15L9.34838 17.6516M12 15V21.75M9.34838 6.34838L12 9M12 9L14.6516 6.34838M12 9V2.25M6.34838 14.6516L9 12M9 12L6.34838 9.34838M9 12H2.25M17.6516 9.34838L15 12M15 12L17.6516 14.6516M15 12H21.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    