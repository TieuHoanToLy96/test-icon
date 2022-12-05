<script>
export default {
  name: 'filter-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00009 5H18.5001C18.6441 5.05051 18.7747 5.13331 18.8817 5.24206C18.9888 5.35082 19.0696 5.48264 19.1178 5.62742C19.1661 5.77221 19.1806 5.92612 19.1602 6.07737C19.1398 6.22861 19.085 6.37318 19.0001 6.5L14.9511 10.954M14.0001 14V19L10.0001 16V12L5.00009 6.5C4.86381 6.29663 4.80686 6.05034 4.84004 5.8078C4.87321 5.56525 4.99421 5.3433 5.18009 5.184" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    