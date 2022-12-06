<script>
export default {
  name: 'file-svg',
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
<path d="M15.1912 3H6.19088C5.99197 3 5.80122 3.07903 5.66057 3.21968C5.51992 3.36033 5.44091 3.55109 5.44092 3.75V20.25C5.44091 20.4489 5.51992 20.6397 5.66057 20.7803C5.80122 20.921 5.99197 21 6.19088 21H19.691C19.8899 21 20.0806 20.921 20.2213 20.7803C20.3619 20.6397 20.4409 20.4489 20.4409 20.25V8.25M15.1912 3L20.4409 8.25M15.1912 3L15.1909 8.25H20.4409" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    