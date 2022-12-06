<script>
export default {
  name: 'function-svg',
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
<path d="M17.333 4H6.667C5.19406 4 4 5.19406 4 6.667V17.333C4 18.8059 5.19406 20 6.667 20H17.333C18.8059 20 20 18.8059 20 17.333V6.667C20 5.19406 18.8059 4 17.333 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15.5V15.75C9 16.44 9.56 17 10.25 17C10.96 17 11.554 16.462 11.624 15.756L12.376 8.244C12.41 7.90318 12.5694 7.58714 12.8233 7.35726C13.0772 7.12737 13.4075 7.00005 13.75 7C14.44 7 15 7.56 15 8.25V8.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    