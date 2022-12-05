<script>
export default {
  name: 'number-circle-one',
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
<path d="M10.3602 9.37434L12.6102 7.875V16.5M21.2352 12C21.2352 16.9706 17.2058 21 12.2352 21C7.26467 21 3.23523 16.9706 3.23523 12C3.23523 7.02944 7.26467 3 12.2352 3C17.2058 3 21.2352 7.02944 21.2352 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    