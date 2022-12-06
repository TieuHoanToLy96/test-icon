<script>
export default {
  name: 'wash-press',
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
<path d="M3.48596 7.96519C3.65396 7.98519 3.82596 7.99819 3.99996 8.00019C4.78996 8.00919 5.53896 7.82219 5.99996 7.50019C6.46096 7.18019 7.20996 6.99319 7.99996 7.00019C8.78996 6.99319 9.53896 7.18019 9.99996 7.50019C10.461 7.82219 11.21 8.00919 12 8.00019C12.79 8.00919 13.539 7.82219 14 7.50019C14.461 7.18019 15.21 6.99319 16 7.00019C16.79 6.99319 17.539 7.18019 18 7.50019C18.461 7.82219 19.21 8.00919 20 8.00019C20.17 7.99819 20.339 7.98619 20.503 7.96619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5L4.721 15.329C4.79888 15.796 5.0399 16.2202 5.40118 16.5262C5.76245 16.8322 6.22056 17.0001 6.694 17H17.306C17.7794 17.0001 18.2375 16.8322 18.5988 16.5262C18.9601 16.2202 19.2011 15.796 19.279 15.329L21 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 20H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    