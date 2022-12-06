<script>
export default {
  name: 'voicemail-svg',
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
<path d="M5.9552 16.5C8.44048 16.5 10.4552 14.4853 10.4552 12C10.4552 9.51472 8.44048 7.5 5.9552 7.5C3.46992 7.5 1.4552 9.51472 1.4552 12C1.4552 14.4853 3.46992 16.5 5.9552 16.5ZM5.9552 16.5H19.4552M19.4552 16.5C21.9405 16.5 23.9552 14.4853 23.9552 12C23.9552 9.51472 21.9405 7.5 19.4552 7.5C16.9699 7.5 14.9552 9.51472 14.9552 12C14.9552 14.4853 16.9699 16.5 19.4552 16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    