<script>
export default {
  name: 'currency-eur',
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
<path d="M17.6406 18.273C16.6966 19.217 15.4939 19.8599 14.1845 20.1203C12.8751 20.3808 11.5179 20.2471 10.2845 19.7362C9.05113 19.2253 7.99692 18.3601 7.25523 17.2501C6.51353 16.1401 6.11765 14.835 6.11765 13.5V10.5C6.11765 9.16498 6.51353 7.85994 7.25523 6.7499C7.99692 5.63987 9.05113 4.77471 10.2845 4.26382C11.5179 3.75292 12.8751 3.61925 14.1845 3.8797C15.4939 4.14015 16.6966 4.78303 17.6406 5.72703M3.86765 10.5H12.8676M3.86765 13.5H11.3676" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    