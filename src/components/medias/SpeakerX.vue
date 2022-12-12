<script>
export default {
  name: 'speaker-x',
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
<path d="M7.9707 15.75H3.4707C3.27179 15.75 3.08103 15.671 2.94037 15.5303C2.79972 15.3897 2.7207 15.1989 2.7207 15V9C2.7207 8.80109 2.79972 8.61032 2.94037 8.46967C3.08103 8.32902 3.27179 8.25 3.4707 8.25H7.9707M7.9707 15.75L14.7207 21V3L7.9707 8.25M7.9707 15.75V8.25M22.9707 9.75L18.4707 14.25M22.9707 14.25L18.4707 9.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    