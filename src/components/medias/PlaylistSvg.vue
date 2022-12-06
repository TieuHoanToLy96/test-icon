<script>
export default {
  name: 'playlist-svg',
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
<path d="M4.39722 6H20.8972M4.39722 12H15.6472M4.39722 18H11.1472M19.3972 18C19.3972 19.2426 18.3899 20.25 17.1472 20.25C15.9046 20.25 14.8972 19.2426 14.8972 18C14.8972 16.7574 15.9046 15.75 17.1472 15.75C18.3899 15.75 19.3972 16.7574 19.3972 18ZM19.3972 18V10.5L23.1472 11.625" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    