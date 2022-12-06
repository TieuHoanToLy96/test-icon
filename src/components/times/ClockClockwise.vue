<script>
export default {
  name: 'clock-clockwise',
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
<path d="M12.4119 7.5V12L16.309 14.25M17.6775 9.34838H21.4275M21.4275 9.34838V5.59838M21.4275 9.34838L18.2455 6.16637C17.0917 5.01259 15.6217 4.22685 14.0214 3.90853C12.421 3.5902 10.7622 3.75357 9.25473 4.378C7.74724 5.00242 6.45876 6.05984 5.55224 7.41655C4.64572 8.77325 4.16187 10.3683 4.16187 12C4.16187 13.6317 4.64572 15.2268 5.55224 16.5835C6.45876 17.9402 7.74724 18.9976 9.25473 19.622C10.7622 20.2464 12.421 20.4098 14.0214 20.0915C15.6217 19.7732 17.0917 18.9874 18.2455 17.8336" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    