<script>
export default {
  name: 'brackets-round',
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
<path d="M6.86755 3.75C6.86755 3.75 3.11755 6 3.11755 12C3.11755 18 6.86755 20.25 6.86755 20.25M17.3676 3.75C17.3676 3.75 21.1176 6 21.1176 12C21.1176 18 17.3676 20.25 17.3676 20.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    