<script>
export default {
  name: 'lasso-off',
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
<path d="M4.028 13.2521C3.371 12.2801 3 11.1741 3 10.0001C3 8.19611 3.878 6.55111 5.319 5.31011M7.809 3.80411C9.1406 3.26673 10.5641 2.99366 12 3.00011C16.97 3.00011 21 6.13411 21 10.0001C21 11.7991 20.127 13.4401 18.693 14.6801M16.19 16.1971C14.8586 16.734 13.4355 17.0068 12 17.0001C10.087 17.0001 8.314 16.5361 6.856 15.7451" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17C6.10457 17 7 16.1046 7 15C7 13.8954 6.10457 13 5 13C3.89543 13 3 13.8954 3 15C3 16.1046 3.89543 17 5 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17C5 18.42 5.316 19.805 6 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    