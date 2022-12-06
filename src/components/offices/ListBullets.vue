<script>
export default {
  name: 'list-bullets',
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
<path d="M8.42676 6H20.4268M8.42733 12H20.4268M8.42733 18H20.4268" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.3009 6.9375C4.81819 6.9375 5.23754 6.51777 5.23754 6C5.23754 5.48223 4.81819 5.0625 4.3009 5.0625C3.78361 5.0625 3.36426 5.48223 3.36426 6C3.36426 6.51777 3.78361 6.9375 4.3009 6.9375Z" fill="currentColor"/>
<path d="M4.3009 18.9375C4.81819 18.9375 5.23754 18.5178 5.23754 18C5.23754 17.4822 4.81819 17.0625 4.3009 17.0625C3.78361 17.0625 3.36426 17.4822 3.36426 18C3.36426 18.5178 3.78361 18.9375 4.3009 18.9375Z" fill="currentColor"/>
<path d="M4.3009 12.9375C4.81819 12.9375 5.23754 12.5178 5.23754 12C5.23754 11.4822 4.81819 11.0625 4.3009 11.0625C3.78361 11.0625 3.36426 11.4822 3.36426 12C3.36426 12.5178 3.78361 12.9375 4.3009 12.9375Z" fill="currentColor"/>
</svg>

</template>
    