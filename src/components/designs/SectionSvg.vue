<script>
export default {
  name: 'section-svg',
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
<path d="M14 3L19.3333 3C19.7015 3 20 3.40294 20 3.9L20 10M14 3H4.66667C4.29848 3 4 3.40294 4 3.9L4 20.1C4 20.5971 4.29848 21 4.66667 21H14M14 3L14 10M14 21L19.3333 21C19.7015 21 20 20.5971 20 20.1V10M14 21L14 10M14 10H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    