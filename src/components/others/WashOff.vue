<script>
export default {
  name: 'wash-off',
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
<path d="M3 6L4.721 16.329C4.79888 16.796 5.0399 17.2202 5.40118 17.5262C5.76245 17.8322 6.22056 18.0001 6.694 18H17.306C17.514 18 17.716 17.968 17.906 17.908M19.427 15.436L21 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.48602 8.96519C3.65402 8.98519 3.82602 8.99819 4.00002 9.00019C4.79002 9.00919 5.53902 8.82219 6.00002 8.50019C6.46102 8.18019 7.21002 7.99319 8.00002 8.00019M12.92 8.91919C13.348 8.83619 13.725 8.69219 14 8.50119C14.461 8.17919 15.21 7.99319 16 8.00119C16.79 7.99319 17.539 8.17919 18 8.50119C18.461 8.82119 19.21 9.00919 20 9.00119C20.17 8.99819 20.339 8.98619 20.503 8.96619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    