<script>
export default {
  name: 'bounding-box',
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
<path d="M6.00012 15.75V8.25M15.7501 18H8.25012M18.0001 8.25V15.75M8.25012 6H15.7501M16.5001 3.75H19.5001C19.9143 3.75 20.2501 4.08579 20.2501 4.5V7.5C20.2501 7.91421 19.9143 8.25 19.5001 8.25H16.5001C16.0859 8.25 15.7501 7.91421 15.7501 7.5V4.5C15.7501 4.08579 16.0859 3.75 16.5001 3.75ZM4.50012 3.75H7.50012C7.91434 3.75 8.25012 4.08579 8.25012 4.5V7.5C8.25012 7.91421 7.91434 8.25 7.50012 8.25H4.50012C4.08591 8.25 3.75012 7.91421 3.75012 7.5V4.5C3.75012 4.08579 4.08591 3.75 4.50012 3.75ZM16.5001 15.75H19.5001C19.9143 15.75 20.2501 16.0858 20.2501 16.5V19.5C20.2501 19.9142 19.9143 20.25 19.5001 20.25H16.5001C16.0859 20.25 15.7501 19.9142 15.7501 19.5V16.5C15.7501 16.0858 16.0859 15.75 16.5001 15.75ZM4.50012 15.75H7.50012C7.91434 15.75 8.25012 16.0858 8.25012 16.5V19.5C8.25012 19.9142 7.91434 20.25 7.50012 20.25H4.50012C4.08591 20.25 3.75012 19.9142 3.75012 19.5V16.5C3.75012 16.0858 4.08591 15.75 4.50012 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    