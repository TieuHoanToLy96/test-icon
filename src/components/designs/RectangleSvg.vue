<script>
export default {
  name: 'rectangle-svg',
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
<path d="M20.2507 4.5H3.75073C3.33652 4.5 3.00073 4.83579 3.00073 5.25V18.75C3.00073 19.1642 3.33652 19.5 3.75073 19.5H20.2507C20.6649 19.5 21.0007 19.1642 21.0007 18.75V5.25C21.0007 4.83579 20.6649 4.5 20.2507 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    