<script>
export default {
  name: 'envelope-open',
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
<path d="M21.8823 9V18.75C21.8823 18.9489 21.8033 19.1397 21.6627 19.2803C21.522 19.421 21.3312 19.5 21.1323 19.5H4.63232C4.43341 19.5 4.24265 19.421 4.10199 19.2803C3.96134 19.1397 3.88232 18.9489 3.88232 18.75V9M21.8823 9L12.8823 3L3.88232 9M21.8823 9L14.5187 14.25M3.88232 9L11.246 14.25M11.246 14.25L4.11359 19.2881M11.246 14.25L14.5187 14.25M21.6512 19.2881L14.5187 14.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    