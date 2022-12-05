<script>
export default {
  name: 'message-circle-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.585 4.58082C11.81 3.39982 15.617 3.96482 18.245 6.20682C21.228 8.74982 21.847 12.7318 19.879 15.8688M17.971 17.9768C15.185 20.1668 11.081 20.6418 7.7 18.9998L3 19.9998L4.3 16.0998C2.063 12.7918 2.811 8.55982 6.014 6.01582" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    