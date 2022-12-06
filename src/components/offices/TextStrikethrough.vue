<script>
export default {
  name: 'text-strikethrough',
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
<path d="M3.80884 12H20.3088M7.21515 9.00028C7.1372 8.75789 7.09849 8.5046 7.1005 8.25C7.1005 6.17893 9.15934 4.5 12.0588 4.5C14.2881 4.5 16.0204 5.49244 16.7022 6.89251M6.80884 15.75C6.80884 17.8211 9.15934 19.5 12.0588 19.5C14.9583 19.5 17.3088 17.8211 17.3088 15.75C17.3088 13.5219 15.2817 12.659 13.0341 11.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    