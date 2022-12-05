<script>
export default {
  name: 'notification-off',
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
<path d="M6.154 6.18701C5.80904 6.34804 5.51721 6.60419 5.31279 6.92534C5.10837 7.24649 4.99986 7.61932 5 8.00001V17C5 17.5304 5.21071 18.0392 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.38 19 16.7522 18.8918 17.0729 18.6879C17.3937 18.4841 17.6497 18.1931 17.811 17.849" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 8.65685 15.3431 10 17 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    