<script>
export default {
  name: 'share-network',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.859 6.87215L9.40544 10.378M9.40544 13.622L14.859 17.1278M9.88232 12C9.88232 13.6569 8.53918 15 6.88232 15C5.22547 15 3.88232 13.6569 3.88232 12C3.88232 10.3431 5.22547 9 6.88232 9C8.53918 9 9.88232 10.3431 9.88232 12ZM20.3823 18.75C20.3823 20.4069 19.0392 21.75 17.3823 21.75C15.7255 21.75 14.3823 20.4069 14.3823 18.75C14.3823 17.0931 15.7255 15.75 17.3823 15.75C19.0392 15.75 20.3823 17.0931 20.3823 18.75ZM20.3823 5.25C20.3823 6.90685 19.0392 8.25 17.3823 8.25C15.7255 8.25 14.3823 6.90685 14.3823 5.25C14.3823 3.59315 15.7255 2.25 17.3823 2.25C19.0392 2.25 20.3823 3.59315 20.3823 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    