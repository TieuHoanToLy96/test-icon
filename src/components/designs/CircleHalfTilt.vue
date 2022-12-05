<script>
export default {
  name: 'circle-half-tilt',
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
<path d="M19.1286 5.63604L6.40069 18.364M14.0774 10.6872L20.3058 16.9156M11.4524 13.3122L17.6809 19.5407M8.8277 15.9375L13.8276 20.9374M16.7022 8.0625L21.7021 13.0624M21.7647 12C21.7647 16.9706 17.7352 21 12.7646 21C7.79409 21 3.76465 16.9706 3.76465 12C3.76465 7.02944 7.79409 3 12.7646 3C17.7352 3 21.7647 7.02944 21.7647 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    