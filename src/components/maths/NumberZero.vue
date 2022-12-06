<script>
export default {
  name: 'number-zero',
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
<path d="M12.5293 21.75C16.2572 21.75 19.2793 17.3848 19.2793 12C19.2793 6.61522 16.2572 2.25 12.5293 2.25C8.80137 2.25 5.7793 6.61522 5.7793 12C5.7793 17.3848 8.80137 21.75 12.5293 21.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    