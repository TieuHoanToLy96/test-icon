<script>
export default {
  name: 'flashlight-svg',
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
<path d="M12.8237 11.25V14.25M6.82373 6H18.8237M7.57373 2.25H18.0737C18.2726 2.25 18.4634 2.32902 18.6041 2.46967C18.7447 2.61032 18.8237 2.80109 18.8237 3V7.25C18.8237 7.41228 18.7711 7.57018 18.6737 7.7L16.7237 10.3C16.6264 10.4298 16.5737 10.5877 16.5737 10.75V21C16.5737 21.1989 16.4947 21.3897 16.3541 21.5303C16.2134 21.671 16.0226 21.75 15.8237 21.75H9.82373C9.62482 21.75 9.43405 21.671 9.2934 21.5303C9.15275 21.3897 9.07373 21.1989 9.07373 21V10.75C9.07373 10.5877 9.0211 10.4298 8.92373 10.3L6.97373 7.7C6.87636 7.57018 6.82373 7.41228 6.82373 7.25V3C6.82373 2.80109 6.90275 2.61032 7.0434 2.46967C7.18405 2.32902 7.37482 2.25 7.57373 2.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    