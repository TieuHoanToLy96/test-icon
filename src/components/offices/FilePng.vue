<script>
export default {
  name: 'file-png',
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
<path d="M3.6001 19.4348H5.16289C5.57737 19.4348 5.97487 19.2699 6.26795 18.9763C6.56103 18.6828 6.72568 18.2847 6.72568 17.8696C6.72568 17.4544 6.56103 17.0563 6.26795 16.7628C5.97487 16.4693 5.57737 16.3043 5.16289 16.3043H3.6001V21M9.85126 21V16.3043L13.3675 21V16.3043M19.228 18.8478H20.4001V20.0022C20.2145 20.3032 19.9561 20.5524 19.6487 20.7268C19.3414 20.9012 18.9952 20.9952 18.642 21C17.4503 21 16.4931 19.9533 16.4931 18.6522C16.4931 17.3511 17.4503 16.3044 18.642 16.3044C19.0632 16.3036 19.4737 16.4372 19.814 16.6859M3.9908 12.3913V3.78261C3.9908 3.57505 4.07312 3.37599 4.21966 3.22922C4.3662 3.08245 4.56495 3 4.77219 3H14.1489M14.1489 3L19.6187 8.47826M14.1489 3V8.47826H19.6187M19.6187 8.47826V12.3913" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    