<script>
export default {
  name: 'money-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5588 6L22.5588 11.25M16.5588 18L22.5588 12.75M7.55882 6L1.55882 11.25M7.55882 18L1.55882 12.75M2.30882 6H21.8088C22.223 6 22.5588 6.33579 22.5588 6.75V17.25C22.5588 17.6642 22.223 18 21.8088 18H2.30882C1.89461 18 1.55882 17.6642 1.55882 17.25V6.75C1.55882 6.33579 1.89461 6 2.30882 6ZM15.0588 12C15.0588 13.6569 13.7157 15 12.0588 15C10.402 15 9.05882 13.6569 9.05882 12C9.05882 10.3431 10.402 9 12.0588 9C13.7157 9 15.0588 10.3431 15.0588 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    