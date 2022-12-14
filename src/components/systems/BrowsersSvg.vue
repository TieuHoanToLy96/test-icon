<script>
export default {
  name: 'browsers-svg',
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
<path d="M6.4126 7.5V5.25C6.4126 5.05109 6.49162 4.86032 6.63227 4.71967C6.77292 4.57902 6.96369 4.5 7.1626 4.5H20.6626C20.8615 4.5 21.0523 4.57902 21.1929 4.71967C21.3336 4.86032 21.4126 5.05109 21.4126 5.25V15.75C21.4126 15.9489 21.3336 16.1397 21.1929 16.2803C21.0523 16.421 20.8615 16.5 20.6626 16.5H18.4126M3.41187 10.5H18.4119M4.1626 7.5H17.6626C18.0768 7.5 18.4126 7.83579 18.4126 8.25V18.75C18.4126 19.1642 18.0768 19.5 17.6626 19.5H4.1626C3.74838 19.5 3.4126 19.1642 3.4126 18.75V8.25C3.4126 7.83579 3.74838 7.5 4.1626 7.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    