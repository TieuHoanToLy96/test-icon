<script>
export default {
  name: 'waves-svg',
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
<path d="M4.22046 6.74996C4.22046 6.74996 7.97046 3.74996 12.4705 6.74996C16.9705 9.74996 20.7205 6.74996 20.7205 6.74996M4.22046 12C4.22046 12 7.97046 8.99996 12.4705 12C16.9705 15 20.7205 12 20.7205 12M4.22046 17.25C4.22046 17.25 7.97046 14.25 12.4705 17.25C16.9705 20.25 20.7205 17.25 20.7205 17.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    