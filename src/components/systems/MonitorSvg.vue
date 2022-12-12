<script>
export default {
  name: 'monitor-svg',
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
<path d="M15.8235 21H9.82349M20.3235 18H5.32349C4.49506 18 3.82349 17.3284 3.82349 16.5V6C3.82349 5.17157 4.49506 4.5 5.32349 4.5H20.3235C21.1519 4.5 21.8235 5.17157 21.8235 6V16.5C21.8235 17.3284 21.1519 18 20.3235 18Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    