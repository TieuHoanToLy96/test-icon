<script>
export default {
  name: 'arrow-uright-down',
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
<path d="M11.25 16.5L15.75 21M15.75 21L20.25 16.5M15.75 21V8.24999C15.75 7.56055 15.6142 6.87786 15.3504 6.24091C15.0865 5.60395 14.6998 5.02519 14.2123 4.53769C13.7248 4.05018 13.1461 3.66347 12.5091 3.39963C11.8721 3.13579 11.1894 3 10.5 3C9.10761 3 7.77226 3.55312 6.78769 4.53769C5.80312 5.52226 5.25 6.85761 5.25 8.25V16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    