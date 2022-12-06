<script>
export default {
  name: 'feather-svg',
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
<path d="M4 20L14 10M14 5V10H19M10 9V14H15M6 13V18H11M6 13L10 9L14 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10C19.638 9.364 20 8.485 20 7.514C19.9999 7.05232 19.9088 6.59519 19.732 6.16871C19.5551 5.74224 19.296 5.35478 18.9694 5.02846C18.6428 4.70214 18.2551 4.44336 17.8285 4.26689C17.4019 4.09043 16.9447 3.99974 16.483 4C15.513 4 14.636 4.367 14 5M11 18L15 14L19 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    