<script>
export default {
  name: 'lightning-slash',
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
<path d="M5.14697 3.74964L20.147 20.2496M16.0011 15.6892L9.64697 22.4971L11.147 14.9971L5.14697 12.7471L9.29053 8.30757M11.3444 6.10698L15.647 1.4971L14.147 8.9971L20.147 11.2471L18.0549 13.4886" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    