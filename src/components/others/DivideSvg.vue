<script>
export default {
  name: 'divide-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z" fill="currentColor" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    