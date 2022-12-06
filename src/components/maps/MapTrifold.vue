<script>
export default {
  name: 'map-trifold',
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
<path d="M9.64722 17.25L3.64722 18.75V5.25L9.64722 3.75M9.64722 17.25L15.6472 20.25M9.64722 17.25V3.75M9.64722 3.75L15.6472 6.75M15.6472 20.25V6.75M15.6472 20.25L21.6472 18.75V5.25L15.6472 6.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    