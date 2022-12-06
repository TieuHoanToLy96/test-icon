<script>
export default {
  name: 'baseball-svg',
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
<path d="M15.8599 10.5967C15.9382 10.1019 16.0575 9.61448 16.2165 9.1394M16.2164 14.8603C16.0574 14.3852 15.9382 13.8978 15.8598 13.4029M8.14013 10.5967C8.06176 10.1019 7.94248 9.61448 7.78349 9.13941M7.78359 14.8603C7.94256 14.3852 8.06183 13.8978 8.14017 13.4029M17.5123 6.65028C17.775 6.29529 18.0633 5.95999 18.3749 5.64706M18.3749 18.353C18.0632 18.04 17.7749 17.7046 17.5121 17.3495M5.62511 18.353C5.93679 18.0399 6.22515 17.7045 6.48788 17.3495M6.48768 6.65028C6.225 6.29528 5.9367 5.95997 5.62509 5.64703M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    