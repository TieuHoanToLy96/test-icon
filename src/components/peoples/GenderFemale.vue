<script>
export default {
  name: 'gender-female',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8823 15.75C16.6102 15.75 19.6323 12.7279 19.6323 9C19.6323 5.27208 16.6102 2.25 12.8823 2.25C9.1544 2.25 6.13232 5.27208 6.13232 9C6.13232 12.7279 9.1544 15.75 12.8823 15.75ZM12.8823 15.75V22.5M9.13232 19.5H16.6323" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    