<script>
export default {
  name: 'file-ppt',
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
<path d="M3.6001 19.4348H5.2801C5.72566 19.4348 6.15298 19.2699 6.46804 18.9763C6.7831 18.6828 6.9601 18.2847 6.9601 17.8696C6.9601 17.4544 6.7831 17.0563 6.46804 16.7628C6.15298 16.4693 5.72566 16.3043 5.2801 16.3043H3.6001V21M10.3201 19.4348H12.0001C12.4457 19.4348 12.873 19.2699 13.188 18.9763C13.5031 18.6828 13.6801 18.2847 13.6801 17.8696C13.6801 17.4544 13.5031 17.0563 13.188 16.7628C12.873 16.4693 12.4457 16.3043 12.0001 16.3043H10.3201V21M20.4001 16.3043H16.6201M18.5101 21V16.3043M3.6001 12.3913V3.78261C3.6001 3.57505 3.6886 3.37599 3.84613 3.22922C4.00366 3.08245 4.21732 3 4.4401 3H14.5201M14.5201 3L20.4001 8.47826M14.5201 3V8.47826H20.4001M20.4001 8.47826V12.3913" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    