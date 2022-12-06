<script>
export default {
  name: 'trending-down-3',
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
<path d="M3 6H5.397C6.20092 6.00006 6.99298 6.19397 7.70601 6.56528C8.41904 6.9366 9.03203 7.47437 9.493 8.133L13.507 13.867C13.968 14.5256 14.581 15.0634 15.294 15.4347C16.007 15.806 16.7991 15.9999 17.603 16H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 19L21 16L18 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    