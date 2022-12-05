<script>
export default {
  name: 'bluetooth-connected',
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
      default: 1.5
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
<path d="M11.897 12L17.897 7.5L11.897 3V12ZM11.897 12L17.897 16.5L11.897 21V12ZM11.897 12L5.89697 7.5M11.897 12L5.89697 16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.52197 12.9375C6.03974 12.9375 6.45947 12.5178 6.45947 12C6.45947 11.4822 6.03974 11.0625 5.52197 11.0625C5.00421 11.0625 4.58447 11.4822 4.58447 12C4.58447 12.5178 5.00421 12.9375 5.52197 12.9375Z" fill="currentColor"/>
<path d="M19.022 12.9375C19.5397 12.9375 19.9595 12.5178 19.9595 12C19.9595 11.4822 19.5397 11.0625 19.022 11.0625C18.5042 11.0625 18.0845 11.4822 18.0845 12C18.0845 12.5178 18.5042 12.9375 19.022 12.9375Z" fill="currentColor"/>
</svg>

</template>
    