<script>
export default {
  name: 'translate-svg',
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
<path d="M22.396 20.25L17.146 9.75L11.896 20.25M13.396 17.25H20.896M8.896 3V5.25M2.896 5.25H14.896M11.896 5.25C11.896 7.63695 10.9478 9.92613 9.25996 11.614C7.57213 13.3018 5.28294 14.25 2.896 14.25M6.4087 8.25008C7.03017 10.0041 8.17986 11.5225 9.69963 12.5964C11.2194 13.6703 13.0346 14.2469 14.8954 14.2469" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    