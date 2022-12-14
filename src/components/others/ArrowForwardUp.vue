<script>
export default {
  name: 'arrow-forward-up',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 13L19 9L15 5M19 9H8C6.93913 9 5.92172 9.42143 5.17157 10.1716C4.42143 10.9217 4 11.9391 4 13C4 14.0609 4.42143 15.0783 5.17157 15.8284C5.92172 16.5786 6.93913 17 8 17H9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    