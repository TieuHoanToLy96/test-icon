<script>
export default {
  name: 'clock-counter-clockwise',
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
<path d="M12.4705 7.5V12L16.3676 14.25M7.20483 9.34838H3.45483M3.45483 9.34838V5.59838M3.45483 9.34838L6.63686 6.16637C7.79064 5.01259 9.26065 4.22685 10.861 3.90853C12.4613 3.5902 14.1201 3.75357 15.6276 4.378C17.1351 5.00242 18.4236 6.05984 19.3301 7.41655C20.2366 8.77325 20.7205 10.3683 20.7205 12C20.7205 13.6317 20.2366 15.2268 19.3301 16.5835C18.4236 17.9402 17.1351 18.9976 15.6276 19.622C14.1201 20.2464 12.4613 20.4098 10.861 20.0915C9.26065 19.7732 7.79064 18.9874 6.63686 17.8336" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    