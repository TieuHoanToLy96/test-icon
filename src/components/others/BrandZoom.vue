<script>
export default {
  name: 'brand-zoom',
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
<path d="M17.0112 9.385V14.513L21.0002 18V6L17.0112 9.385Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.887 6H13.967C15.435 6 17 7.203 17 8.803V16.999C17.0027 17.2608 16.9016 17.513 16.719 17.7006C16.5363 17.8881 16.2868 17.9958 16.025 18H5.652C3.985 18 3 16.5 3 15L3.01 6.998C2.99119 6.87165 3.00004 6.74273 3.03596 6.62014C3.07187 6.49755 3.13398 6.38422 3.218 6.288C3.301 6.19297 3.40431 6.11783 3.52029 6.06814C3.63627 6.01846 3.76195 5.99551 3.888 6.001L3.887 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    