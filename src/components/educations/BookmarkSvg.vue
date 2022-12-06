<script>
export default {
  name: 'bookmark-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1754 16.5L12.1748 12.75L6.17542 16.5M18.1754 21L12.1747 17.25L6.17544 21V4.5C6.17544 4.30109 6.25446 4.11032 6.39511 3.96967C6.53576 3.82902 6.72653 3.75 6.92544 3.75H17.4254C17.6244 3.75 17.8151 3.82902 17.9558 3.96967C18.0964 4.11032 18.1754 4.30109 18.1754 4.5V21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    