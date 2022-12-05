<script>
export default {
  name: 'arrow-uright-up',
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
<path d="M11.25 7.5L15.75 3M15.75 3L20.25 7.5M15.75 3V15.75C15.75 16.4394 15.6142 17.1221 15.3504 17.7591C15.0865 18.3961 14.6998 18.9748 14.2123 19.4623C13.7248 19.9498 13.1461 20.3365 12.5091 20.6004C11.8721 20.8642 11.1894 21 10.5 21C9.10761 21 7.77226 20.4469 6.78769 19.4623C5.80312 18.4777 5.25 17.1424 5.25 15.75V7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    