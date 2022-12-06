<script>
export default {
  name: 'link-simple-horizontal-break',
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
<path d="M10.2783 16.4996H6.52832C5.33485 16.4996 4.19025 16.0255 3.34634 15.1816C2.50243 14.3377 2.02832 13.1931 2.02832 11.9996C2.02832 10.8062 2.50243 9.66157 3.34634 8.81765C4.19025 7.97374 5.33485 7.49963 6.52832 7.49963H10.2783M14.779 16.4996H18.529C19.7224 16.4996 20.867 16.0255 21.7109 15.1816C22.5549 14.3377 23.029 13.1931 23.029 11.9996C23.029 10.8062 22.5549 9.66157 21.7109 8.81765C20.867 7.97374 19.7224 7.49963 18.529 7.49963H14.779" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    