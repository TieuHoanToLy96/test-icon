<script>
export default {
  name: 'lungs-off',
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
<path d="M6.58304 6.60791C5.37704 7.66591 4.51304 9.23391 3.65004 12.0569C3.23004 13.4269 3.01404 15.0189 3.00204 16.8319C2.99004 18.5069 4.26304 19.8859 5.87904 19.9929L6.08204 19.9999C7.69304 19.9999 9.00004 18.6649 9.00004 17.0199V8.99991" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 11V7.257C15 6.563 15.552 6 16.233 6C16.437 6 16.638 6.052 16.817 6.15L16.947 6.233C18.407 7.292 19.379 8.88 20.352 12.057C20.772 13.427 20.988 15.019 21 16.832C21 16.895 21 16.957 20.996 17.019M19.541 19.529C19.124 19.794 18.641 19.959 18.122 19.993L17.92 20C16.307 20 15 18.665 15 17.02V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11.9999C9.39664 12.0003 9.78941 11.9219 10.1554 11.7691C10.5215 11.6163 10.8534 11.3922 11.132 11.1099" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    