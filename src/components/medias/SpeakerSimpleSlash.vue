<script>
export default {
  name: 'speaker-simple-slash',
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
<path d="M18.233 9.75V14.25M21.233 8.25V15.75M4.73523 3.75L19.7352 20.25M10.7493 5.90569L14.4852 3V10.0152M14.4852 14.475V21L7.73523 15.75H3.23523C3.03632 15.75 2.84555 15.671 2.7049 15.5303C2.56425 15.3897 2.48523 15.1989 2.48523 15V9C2.48523 8.80109 2.56425 8.61032 2.7049 8.46967C2.84555 8.32902 3.03632 8.25 3.23523 8.25H8.82614" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    