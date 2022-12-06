<script>
export default {
  name: 'faders-horizontal',
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
<path d="M13.0441 16.1243L4.04407 16.1243M20.5441 16.1243L16.0441 16.1243M7.04407 7.87436L4.04407 7.87427M20.5441 7.87427L10.0441 7.87436M10.0441 5.62433V10.1243M16.0441 18.3743V13.8743" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    