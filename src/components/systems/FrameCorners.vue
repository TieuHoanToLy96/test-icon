<script>
export default {
  name: 'frame-corners',
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
<path d="M15.4119 7.5H18.4119V10.5M9.41187 16.5H6.41187V13.5M4.16187 4.5H20.6619C21.0761 4.5 21.4119 4.83579 21.4119 5.25V18.75C21.4119 19.1642 21.0761 19.5 20.6619 19.5H4.16187C3.74765 19.5 3.41187 19.1642 3.41187 18.75V5.25C3.41187 4.83579 3.74765 4.5 4.16187 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    