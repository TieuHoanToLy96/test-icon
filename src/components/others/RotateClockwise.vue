<script>
export default {
  name: 'rotate-clockwise',
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
<path d="M4.05005 10.9998C4.30293 9.07056 5.25027 7.2996 6.71473 6.01844C8.17918 4.73728 10.0604 4.03377 12.0061 4.03959C13.9519 4.0454 15.8288 4.76016 17.2856 6.05005C18.7423 7.33994 19.6791 9.11654 19.9204 11.0473C20.1618 12.978 19.6912 14.9305 18.5967 16.5393C17.5023 18.1481 15.8591 19.3029 13.9746 19.7875C12.0902 20.2721 10.0937 20.0533 8.35892 19.172C6.62417 18.2908 5.27005 16.8075 4.55005 14.9998M4.05005 19.9998V14.9998H9.05005" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    