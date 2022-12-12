<script>
export default {
  name: 'check-circle',
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
<path d="M16.5955 9.75L11.0954 15L8.34546 12.375M21.4705 12C21.4705 16.9706 17.441 21 12.4705 21C7.4999 21 3.47046 16.9706 3.47046 12C3.47046 7.02944 7.4999 3 12.4705 3C17.441 3 21.4705 7.02944 21.4705 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    