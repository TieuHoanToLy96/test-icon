<script>
export default {
  name: 'mountain-off',
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
<path d="M18.281 14.26L14.08 5.38803C13.8937 4.99427 13.5994 4.66152 13.2313 4.4285C12.8633 4.19548 12.4366 4.07178 12.001 4.07178C11.5654 4.07178 11.1387 4.19548 10.7707 4.4285C10.4026 4.66152 10.1083 4.99427 9.922 5.38803L9.757 5.73703M8.468 8.45603L3 20H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 11L9.5 13.5L11.5 11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    