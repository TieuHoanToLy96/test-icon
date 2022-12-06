<script>
export default {
  name: 'arrow-uup-left',
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
<path d="M7.5 12.75L3 8.25M3 8.25L7.5 3.75M3 8.25H15.75C16.4394 8.25 17.1221 8.38579 17.7591 8.64963C18.3961 8.91347 18.9748 9.30018 19.4623 9.78769C19.9498 10.2752 20.3365 10.8539 20.6004 11.4909C20.8642 12.1279 21 12.8106 21 13.5C21 14.8924 20.4469 16.2277 19.4623 17.2123C18.4777 18.1969 17.1424 18.75 15.75 18.75H7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    