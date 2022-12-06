<script>
export default {
  name: 'number-5',
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
<path d="M8 20H12C13.0609 20 14.0783 19.5786 14.8284 18.8284C15.5786 18.0783 16 17.0609 16 16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12H8V4H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    