<script>
export default {
  name: 'file-pdf',
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
<path d="M3.6001 12.3913V3.78261C3.6001 3.57505 3.68438 3.37599 3.83441 3.22922C3.98444 3.08245 4.18792 3 4.4001 3H14.0001M14.0001 3L19.6001 8.47826M14.0001 3V8.47826H19.6001M19.6001 8.47826V12.3913M3.6001 19.4348H5.2001C5.62444 19.4348 6.03141 19.2699 6.33147 18.9763C6.63153 18.6828 6.8001 18.2847 6.8001 17.8696C6.8001 17.4544 6.63153 17.0563 6.33147 16.7628C6.03141 16.4693 5.62444 16.3043 5.2001 16.3043H3.6001V21M20.4001 16.3043H17.6001V21M20.0001 19.0435H17.6001M11.6001 21C12.2366 21 12.8471 20.7526 13.2972 20.3123C13.7472 19.872 14.0001 19.2749 14.0001 18.6522C14.0001 18.0295 13.7472 17.4323 13.2972 16.992C12.8471 16.5517 12.2366 16.3043 11.6001 16.3043H10.2001V21H11.6001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    