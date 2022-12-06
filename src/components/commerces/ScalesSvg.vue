<script>
export default {
  name: 'scales-svg',
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
<path d="M12.2942 3.75V20.25M10.0442 20.25H14.5442M5.54416 8.25L19.0442 5.25M5.54416 8.25L8.54416 15.75C8.54416 17.4069 6.66916 18 5.54416 18C4.41916 18 2.54416 17.4069 2.54416 15.75L5.54416 8.25ZM19.0442 5.25L22.0442 12.75C22.0442 14.4069 20.1692 15 19.0442 15C17.9192 15 16.0442 14.4069 16.0442 12.75L19.0442 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    