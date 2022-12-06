<script>
export default {
  name: 'pages-svg',
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
<path d="M16 10H8M16 14H8M20 3.75V20.25C20 20.6642 19.602 21 19.1111 21H4.88889C4.39797 21 4 20.6642 4 20.25V3.75C4 3.33579 4.39797 3 4.88889 3H19.1111C19.602 3 20 3.33579 20 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    