<script>
export default {
  name: 'compass-svg',
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
<path d="M12.4707 21C17.4413 21 21.4707 16.9706 21.4707 12C21.4707 7.02944 17.4413 3 12.4707 3C7.50014 3 3.4707 7.02944 3.4707 12C3.4707 16.9706 7.50014 21 12.4707 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0612 13.591L16.695 7.76513L10.8792 10.409L8.4927 15.9774L14.0612 13.591Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    