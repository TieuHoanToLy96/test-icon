<script>
export default {
  name: 'repeat-svg',
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
<path d="M19.1028 8.25L21.3528 6M21.3528 6L19.1028 3.75M21.3528 6H9.35278C7.76148 6 6.23536 6.63214 5.11014 7.75736C3.98492 8.88258 3.35278 10.4087 3.35278 12M5.60278 15.75L3.35278 18M3.35278 18L5.60278 20.25M3.35278 18H15.3528C16.9441 18 18.4702 17.3679 19.5954 16.2426C20.7206 15.1174 21.3528 13.5913 21.3528 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    