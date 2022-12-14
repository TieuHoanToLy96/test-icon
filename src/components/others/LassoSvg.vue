<script>
export default {
  name: 'lasso-svg',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.028 13.252C3.371 12.28 3 11.174 3 10C3 6.134 7.03 3 12 3C16.97 3 21 6.134 21 10C21 13.866 16.97 17 12 17C10.087 17 8.314 16.536 6.856 15.745" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17C6.10457 17 7 16.1046 7 15C7 13.8954 6.10457 13 5 13C3.89543 13 3 13.8954 3 15C3 16.1046 3.89543 17 5 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17C5 18.42 5.316 19.805 6 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    