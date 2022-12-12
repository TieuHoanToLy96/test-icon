<script>
export default {
  name: 'wash-gentle',
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
<path d="M3.48602 5.96519C3.65402 5.98519 3.82602 5.99819 4.00002 6.00019C4.79002 6.00919 5.53902 5.82219 6.00002 5.50019C6.46102 5.18019 7.21002 4.99319 8.00002 5.00019C8.79002 4.99319 9.53902 5.18019 10 5.50019C10.461 5.82219 11.21 6.00919 12 6.00019C12.79 6.00919 13.539 5.82219 14 5.50019C14.461 5.18019 15.21 4.99319 16 5.00019C16.79 4.99319 17.539 5.18019 18 5.50019C18.461 5.82219 19.21 6.00919 20 6.00019C20.17 5.99819 20.339 5.98619 20.503 5.96619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L4.721 13.329C4.79888 13.796 5.0399 14.2202 5.40118 14.5262C5.76245 14.8322 6.22056 15.0001 6.694 15H17.306C17.7794 15.0001 18.2375 14.8322 18.5988 14.5262C18.9601 14.2202 19.2011 13.796 19.279 13.329L21 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 18H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 21H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    