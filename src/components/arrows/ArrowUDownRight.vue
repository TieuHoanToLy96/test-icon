<script>
export default {
  name: 'arrow-udown-right',
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
<path d="M16.5 11.25L21 15.75M21 15.75L16.5 20.25M21 15.75H8.24999C7.56055 15.75 6.87786 15.6142 6.24091 15.3504C5.60395 15.0865 5.02519 14.6998 4.53769 14.2123C4.05018 13.7248 3.66347 13.1461 3.39963 12.5091C3.13579 11.8721 3 11.1894 3 10.5C3 9.10761 3.55312 7.77226 4.53769 6.78769C5.52226 5.80312 6.85761 5.25 8.25 5.25H16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    