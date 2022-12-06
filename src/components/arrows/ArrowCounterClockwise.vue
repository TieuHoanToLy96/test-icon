<script>
export default {
  name: 'arrow-counter-clockwise',
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
<path d="M7.48431 9.34838H2.98431M2.98431 9.34838V4.84838M2.98431 9.34838L6.16634 6.16637C7.32012 5.01259 8.79013 4.22685 10.3905 3.90853C11.9908 3.5902 13.6496 3.75357 15.1571 4.378C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.25 13.6317 19.7661 15.2268 18.8596 16.5835C17.9531 17.9402 16.6646 18.9976 15.1571 19.622C13.6496 20.2464 11.9908 20.4098 10.3905 20.0915C8.79013 19.7732 7.32012 18.9874 6.16634 17.8336" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    