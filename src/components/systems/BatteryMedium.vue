<script>
export default {
  name: 'battery-medium',
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
<path d="M24.0149 9V15M10.6649 15.75V8.25004M7.21489 15.75V8.25004M21.0149 6.75V17.25C21.0149 18.0784 20.3433 18.75 19.5149 18.75H5.26489C4.43647 18.75 3.76489 18.0784 3.76489 17.25V6.75C3.76489 5.92157 4.43647 5.25 5.26489 5.25H19.5149C20.3433 5.25 21.0149 5.92157 21.0149 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    