<script>
export default {
  name: 'medal-svg',
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
<path d="M16.6766 14.9995V22.5L12.1759 20.25L7.67657 22.5V15.0002M19.676 9C19.676 13.1421 16.3182 16.5 12.176 16.5C8.03389 16.5 4.67603 13.1421 4.67603 9C4.67603 4.85786 8.03389 1.5 12.176 1.5C16.3182 1.5 19.676 4.85786 19.676 9ZM16.676 9C16.676 11.4853 14.6613 13.5 12.176 13.5C9.69074 13.5 7.67603 11.4853 7.67603 9C7.67603 6.51472 9.69074 4.5 12.176 4.5C14.6613 4.5 16.676 6.51472 16.676 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    