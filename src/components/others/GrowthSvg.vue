<script>
export default {
  name: 'growth-svg',
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
<path d="M16.5 15C15.3065 15 14.1619 15.4741 13.318 16.318C12.4741 17.1619 12 18.3065 12 19.5M16.5 11C15.3065 11 14.1619 11.4741 13.318 12.318C12.4741 13.1619 12 14.3065 12 15.5M16.5 7C15.3065 7 14.1619 7.47411 13.318 8.31802C12.4741 9.16193 12 10.3065 12 11.5M8 15C10.21 15 12 17.015 12 19.5M8 11C10.21 11 12 13.015 12 15.5M8 7C10.21 7 12 9.015 12 11.5M12 4V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    