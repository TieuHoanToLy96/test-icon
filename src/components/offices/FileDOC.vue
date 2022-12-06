<script>
export default {
  name: 'file-doc',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4001 20.462C20.0173 20.8043 19.5187 20.9959 19.0001 21C17.7801 21 16.8001 19.9533 16.8001 18.6522C16.8001 17.3511 17.7801 16.3043 19.0001 16.3043C19.5187 16.3084 20.0173 16.5001 20.4001 16.8424M4.0001 12.3913V3.78261C4.0001 3.57505 4.08438 3.37599 4.23441 3.22922C4.38444 3.08245 4.58792 3 4.8001 3H14.4001M14.4001 3L20.0001 8.47826M14.4001 3V8.47826H20.0001M20.0001 8.47826V12.3913M5.0001 21C5.63662 21 6.24707 20.7526 6.69715 20.3123C7.14724 19.872 7.4001 19.2749 7.4001 18.6522C7.4001 18.0295 7.14724 17.4323 6.69715 16.992C6.24707 16.5517 5.63662 16.3043 5.0001 16.3043H3.6001V21H5.0001ZM14.4001 18.6522C14.4001 19.9488 13.4151 21 12.2001 21C10.9851 21 10.0001 19.9488 10.0001 18.6522C10.0001 17.3555 10.9851 16.3043 12.2001 16.3043C13.4151 16.3043 14.4001 17.3555 14.4001 18.6522Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    