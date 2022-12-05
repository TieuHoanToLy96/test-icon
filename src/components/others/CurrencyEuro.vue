<script>
export default {
  name: 'currency-euro',
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
<path d="M17.2 7C16.3561 6.03533 15.2868 5.38281 14.1263 5.12426C12.9658 4.8657 11.7657 5.01262 10.6765 5.5466C9.58728 6.08058 8.65743 6.97784 8.00355 8.12587C7.34967 9.27391 7.00085 10.6216 7.00085 12C7.00085 13.3784 7.34967 14.7261 8.00355 15.8741C8.65743 17.0222 9.58728 17.9194 10.6765 18.4534C11.7657 18.9874 12.9658 19.1343 14.1263 18.8758C15.2868 18.6172 16.3561 17.9647 17.2 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 10H5M5 14H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    