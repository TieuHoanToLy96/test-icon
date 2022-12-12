<script>
export default {
  name: 'bookmark-simple',
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
<path d="M18.293 21L12.2923 17.25L6.29297 21V4.5C6.29297 4.30109 6.37199 4.11032 6.51264 3.96967C6.65329 3.82902 6.84406 3.75 7.04297 3.75H17.543C17.7419 3.75 17.9326 3.82902 18.0733 3.96967C18.214 4.11032 18.293 4.30109 18.293 4.5V21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    