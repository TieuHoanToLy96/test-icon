<script>
export default {
  name: 'signature-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17C6.333 13.667 8 11 8 9C8 8.606 7.983 8.265 7.95 7.967M6 6C5 6 3.968 7.085 4 9C4.034 11.048 5.658 13.877 6.5 15C8 17 9 17.5 10 16L12 13C12.333 15.667 13.333 17 15 17C15.219 17 15.708 16.659 16.231 16.258M20 16C20.303 16.245 20.64 16.677 21 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    