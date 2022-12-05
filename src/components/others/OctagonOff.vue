<script>
export default {
  name: 'octagon-off',
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
<path d="M7.647 3.653L8 3.3C8.2 3.1 8.4 3 8.7 3H15.3C15.6 3 15.8 3.1 16 3.3L20.7 8C20.9 8.2 21 8.4 21 8.7V15.3C21 15.6 20.9 15.8 20.7 16L20.35 16.35M18.353 18.347L16 20.7C15.8 20.9 15.6 21 15.3 21H8.7C8.4 21 8.2 20.9 8 20.7L3.3 16C3.1 15.8 3 15.6 3 15.3V8.7C3 8.4 3.1 8.2 3.3 8L5.65 5.65" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    