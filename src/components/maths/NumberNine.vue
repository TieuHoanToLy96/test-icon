<script>
export default {
  name: 'number-nine',
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
<path d="M17.1341 10.8746L11.0648 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5883 13.5C15.4878 13.5 17.8383 11.1495 17.8383 8.25C17.8383 5.35051 15.4878 3 12.5883 3C9.68876 3 7.33826 5.35051 7.33826 8.25C7.33826 11.1495 9.68876 13.5 12.5883 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    