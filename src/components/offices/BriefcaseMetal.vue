<script>
export default {
  name: 'briefcase-metal',
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
<path d="M15.8088 6.75V5.25C15.8088 4.85218 15.6508 4.47064 15.3695 4.18934C15.0882 3.90804 14.7067 3.75 14.3088 3.75H9.80884C9.41101 3.75 9.02948 3.90804 8.74818 4.18934C8.46687 4.47064 8.30884 4.85218 8.30884 5.25V6.75M3.05884 16.5H21.0588M3.05884 10.5H21.0588M3.80884 6.75H20.3088C20.7231 6.75 21.0588 7.08579 21.0588 7.5V19.5C21.0588 19.9142 20.7231 20.25 20.3088 20.25H3.80884C3.39462 20.25 3.05884 19.9142 3.05884 19.5V7.5C3.05884 7.08579 3.39462 6.75 3.80884 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    