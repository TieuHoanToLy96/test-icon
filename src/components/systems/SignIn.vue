<script>
export default {
  name: 'sign-in',
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
<path d="M9.2254 15.9375L13.1619 12L9.2254 8.0625M2.66187 12H13.1591M13.1619 3.75H18.4119C18.6108 3.75 18.8015 3.82902 18.9422 3.96967C19.0828 4.11032 19.1619 4.30109 19.1619 4.5V19.5C19.1619 19.6989 19.0828 19.8897 18.9422 20.0303C18.8015 20.171 18.6108 20.25 18.4119 20.25H13.1619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    