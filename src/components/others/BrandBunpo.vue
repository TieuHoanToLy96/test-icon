<script>
export default {
  name: 'brand-bunpo',
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
<path d="M3.8999 7.20508C5.1034 8.30212 6.45203 9.22846 7.9079 9.95808C9.3414 10.5957 10.932 10.7931 12.4779 10.5251C13.9779 10.1951 15.3849 9.52708 16.5989 8.56908C17.7208 7.77276 18.6989 6.79104 19.4909 5.66608C20.0939 4.72608 20.2359 3.90008 19.9749 3.43508C19.7139 2.97008 19.0479 2.86708 18.2549 3.17808C17.2462 3.65539 16.3555 4.34999 15.6469 5.21208C14.6231 6.39181 13.7534 7.69694 13.0589 9.09608C12.2293 10.7296 11.5294 12.4258 10.9659 14.1691C10.5781 15.3036 10.3502 16.4867 10.2889 17.6841C10.2189 18.4361 10.3589 19.1941 10.6939 19.8681C11.0169 20.4301 11.7539 21.0001 13.0369 21.0001C16.5109 21.0001 18.1299 17.4701 18.4999 15.3801C18.7399 14.0151 18.4149 12.1831 17.3179 11.3701" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    