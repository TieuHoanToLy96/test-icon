<script>
export default {
  name: 'sim-card',
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
<path d="M11.0291 14.25V18M14.0291 14.25V18M19.2791 21H5.77832C5.57941 21 5.38864 20.921 5.24799 20.7803C5.10734 20.6397 5.02832 20.4489 5.02832 20.25V3.75C5.02832 3.55109 5.10734 3.36032 5.24799 3.21967C5.38864 3.07902 5.57941 3 5.77832 3H14.7791L20.0291 8.25V20.25C20.0291 20.3485 20.0097 20.446 19.972 20.537C19.9343 20.628 19.879 20.7107 19.8094 20.7803C19.7397 20.85 19.6571 20.9052 19.5661 20.9429C19.4751 20.9806 19.3775 21 19.2791 21ZM8.02905 11.25H17.0291V18H8.02905V11.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    