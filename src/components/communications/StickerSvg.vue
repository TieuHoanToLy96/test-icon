<script>
export default {
  name: 'sticker-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6912 20.25H9.19116C7.99769 20.25 6.8531 19.7759 6.00918 18.932C5.16527 18.0881 4.69116 16.9435 4.69116 15.75V8.25C4.69116 7.05653 5.16527 5.91193 6.00918 5.06802C6.8531 4.22411 7.99769 3.75 9.19116 3.75H16.6912C17.8846 3.75 19.0292 4.22411 19.8731 5.06802C20.7171 5.91193 21.1912 7.05653 21.1912 8.25V12.75M13.6912 20.25C15.9412 19.5 20.4412 15 21.1912 12.75M13.6912 20.25V17.25C13.6912 16.0565 14.1653 14.9119 15.0092 14.068C15.8531 13.2241 16.9977 12.75 18.1912 12.75H21.1912" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    