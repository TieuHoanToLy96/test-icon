<script>
export default {
  name: 'chess-svg',
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
<path d="M12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6C15 7.113 14.4 8.482 13.5 9L15 16H9L10.5 9C9.6 8.482 9 7.113 9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 9H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16L6.684 16.772C6.48479 16.8383 6.31153 16.9657 6.18876 17.136C6.06599 17.3064 5.99995 17.511 6 17.721V20H18V17.72C17.9998 17.5102 17.9337 17.3058 17.8109 17.1356C17.6882 16.9655 17.515 16.8383 17.316 16.772L15 16H9V16Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    