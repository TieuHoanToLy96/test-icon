<script>
export default {
  name: 'copyleft-svg',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 9.75004C10.5829 9.23777 11.3408 8.96989 12.1162 9.00211C12.8915 9.03434 13.6246 9.36417 14.163 9.92304C14.7006 10.4808 15.001 11.2253 15.001 12C15.001 12.7747 14.7006 13.5192 14.163 14.077C13.6246 14.6359 12.8915 14.9657 12.1162 14.998C11.3408 15.0302 10.5829 14.7623 10 14.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    