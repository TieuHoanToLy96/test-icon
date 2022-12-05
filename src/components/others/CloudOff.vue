<script>
export default {
  name: 'cloud-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9999 18H6.99992C4.40192 18 2.29492 15.985 2.29492 13.5C2.29492 11.015 4.40192 9.00005 6.99992 9.00005C7.11192 8.50005 7.30492 8.02705 7.56792 7.59205M9.66192 5.64405C9.99092 5.47005 10.3419 5.32505 10.7119 5.21405C12.6119 4.63805 14.7089 5.02005 16.2119 6.21405C17.7149 7.40605 18.3969 9.23105 17.9999 11H18.9999C19.7223 11.0001 20.4269 11.2237 21.0172 11.6402C21.6074 12.0566 22.0543 12.6455 22.2966 13.326C22.539 14.0065 22.5648 14.7453 22.3706 15.441C22.1764 16.1368 21.7716 16.7554 21.2119 17.212" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    