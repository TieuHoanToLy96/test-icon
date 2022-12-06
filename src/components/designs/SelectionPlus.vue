<script>
export default {
  name: 'selection-plus',
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
<path d="M13.125 4.5H10.875M10.875 19.5H13.125M16.875 4.5H18.75C18.9489 4.5 19.1397 4.57902 19.2803 4.71968C19.421 4.86033 19.5 5.0511 19.5 5.25001V7.125M19.5 13.125V10.875M4.5 10.875V13.125M7.12501 19.5H5.25C5.05109 19.5 4.86032 19.421 4.71967 19.2803C4.57902 19.1397 4.5 18.9489 4.5 18.75V16.875M7.125 4.5H5.25C5.05109 4.5 4.86032 4.57902 4.71967 4.71968C4.57902 4.86033 4.5 5.0511 4.5 5.25001V7.125M19.5 16.875V22.125M22.125 19.5H16.875" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    