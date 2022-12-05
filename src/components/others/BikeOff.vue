<script>
export default {
  name: 'bike-off',
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
<path d="M5 21C6.65685 21 8 19.6569 8 18C8 16.3431 6.65685 15 5 15C3.34315 15 2 16.3431 2 18C2 19.6569 3.34315 21 5 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4368 16.44C16.0868 17.0143 15.9399 17.6897 16.0198 18.3575C16.0996 19.0254 16.4016 19.647 16.8772 20.1226C17.3528 20.5982 17.9745 20.9002 18.6423 20.9801C19.3102 21.0599 19.9855 20.913 20.5598 20.563M21.9998 18C21.9998 17.2044 21.6838 16.4413 21.1211 15.8787C20.5585 15.3161 19.7955 15 18.9998 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19V15L9 12L10.665 10.668M12.88 8.896L14 8L16 11H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 6C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4C16.4477 4 16 4.44772 16 5C16 5.55228 16.4477 6 17 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    