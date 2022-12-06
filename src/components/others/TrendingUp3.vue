<script>
export default {
  name: 'trending-up-3',
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
<path d="M18 5L21 8L18 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H5.397C6.20092 17.9999 6.99298 17.806 7.70601 17.4347C8.41904 17.0634 9.03203 16.5256 9.493 15.867L13.507 10.133C13.968 9.47437 14.581 8.9366 15.294 8.56528C16.007 8.19397 16.7991 8.00006 17.603 8H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    