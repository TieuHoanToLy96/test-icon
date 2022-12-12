<script>
export default {
  name: 'briefcase-svg',
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
<path d="M15.7504 6.75V5.25C15.7504 4.85218 15.5923 4.47064 15.311 4.18934C15.0297 3.90804 14.6482 3.75 14.2504 3.75H9.75036C9.35254 3.75 8.97101 3.90804 8.6897 4.18934C8.4084 4.47064 8.25036 4.85218 8.25036 5.25V6.75M21.0011 11.8415C18.2658 13.424 15.1605 14.255 12.0004 14.25C8.84075 14.255 5.736 13.4243 3.00098 11.8423M10.8754 11.25H13.1254M3.75109 6.75H20.2511C20.6653 6.75 21.0011 7.08579 21.0011 7.5V19.5C21.0011 19.9142 20.6653 20.25 20.2511 20.25H3.75109C3.33688 20.25 3.00109 19.9142 3.00109 19.5V7.5C3.00109 7.08579 3.33688 6.75 3.75109 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    