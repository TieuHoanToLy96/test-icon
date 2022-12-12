<script>
export default {
  name: 'wash-temperature-5',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15H10.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6L4.721 16.329C4.79888 16.796 5.0399 17.2202 5.40118 17.5262C5.76245 17.8322 6.22056 18.0001 6.694 18H17.306C17.7794 18.0001 18.2375 17.8322 18.5988 17.5262C18.9601 17.2202 19.2011 16.796 19.279 16.329L21 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 15H14.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12H15.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12H12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12H9.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.48596 8.96519C3.65396 8.98519 3.82596 8.99819 3.99996 9.00019C4.78996 9.00919 5.53896 8.82219 5.99996 8.50019C6.46096 8.18019 7.20996 7.99319 7.99996 8.00019C8.78996 7.99319 9.53896 8.18019 9.99996 8.50019C10.461 8.82219 11.21 9.00919 12 9.00019C12.79 9.00919 13.539 8.82219 14 8.50019C14.461 8.18019 15.21 7.99319 16 8.00019C16.79 7.99319 17.539 8.18019 18 8.50019C18.461 8.82219 19.21 9.00919 20 9.00019C20.17 8.99819 20.339 8.98619 20.503 8.96619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    