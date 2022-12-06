<script>
export default {
  name: 'arrow-uleft-up',
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
<path d="M12.75 7.5L8.25 3M8.25 3L3.75 7.5M8.25 3V15.75C8.25 16.4394 8.38579 17.1221 8.64963 17.7591C8.91347 18.3961 9.30018 18.9748 9.78769 19.4623C10.2752 19.9498 10.8539 20.3365 11.4909 20.6004C12.1279 20.8642 12.8106 21 13.5 21C14.8924 21 16.2277 20.4469 17.2123 19.4623C18.1969 18.4777 18.75 17.1424 18.75 15.75V7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    