<script>
export default {
  name: 'skip-forward-circle',
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
<path d="M15.1543 9V15M21.5293 12C21.5293 16.9706 17.4999 21 12.5293 21C7.55873 21 3.5293 16.9706 3.5293 12C3.5293 7.02944 7.55873 3 12.5293 3C17.4999 3 21.5293 7.02944 21.5293 12ZM14.4043 12L9.9043 9V15L14.4043 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    