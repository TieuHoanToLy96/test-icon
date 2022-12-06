<script>
export default {
  name: 'point-off',
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
<path d="M9.15024 9.194C8.40538 9.94947 7.99113 10.9699 7.99864 12.0308C8.00614 13.0917 8.43477 14.1061 9.19024 14.851C9.94571 15.5959 10.9661 16.0101 12.027 16.0026C13.0879 15.9951 14.1024 15.5665 14.8472 14.811M16.0002 12C16.0002 10.9391 15.5788 9.92172 14.8287 9.17157C14.0785 8.42143 13.0611 8 12.0002 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    