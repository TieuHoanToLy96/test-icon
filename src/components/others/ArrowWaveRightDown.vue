<script>
export default {
  name: 'arrow-wave-right-down',
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
<path d="M17 13.998H21V9.99805" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11.9981C3.887 13.2821 5.48 14.0311 7 13.9981C8.52 14.0311 10.113 13.2821 11 11.9981C11.887 10.7141 13.48 9.96512 15 9.99812C16.52 9.96512 18 10.9981 19 11.9981L21 13.9981" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    