<script>
export default {
  name: 'arrow-uup-right',
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
<path d="M16.5 12.75L21 8.25M21 8.25L16.5 3.75M21 8.25H8.24999C7.56055 8.25 6.87786 8.38579 6.24091 8.64963C5.60395 8.91347 5.02519 9.30018 4.53769 9.78769C4.05018 10.2752 3.66347 10.8539 3.39963 11.4909C3.13579 12.1279 3 12.8106 3 13.5C3 14.8924 3.55312 16.2277 4.53769 17.2123C5.52226 18.1969 6.85761 18.75 8.25 18.75H16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    