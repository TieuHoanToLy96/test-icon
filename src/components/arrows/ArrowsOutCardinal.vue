<script>
export default {
  name: 'arrows-out-cardinal',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6516 19.0984L12 21.75M12 21.75L9.34838 19.0984M12 21.75V15M9.34838 4.90163L12 2.25M12 2.25L14.6516 4.90163M12 2.25V9M4.90163 14.6516L2.25 12M2.25 12L4.90163 9.34838M2.25 12H9M19.0984 9.34838L21.75 12M21.75 12L19.0984 14.6516M21.75 12H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    