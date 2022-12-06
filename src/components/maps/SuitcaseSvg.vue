<script>
export default {
  name: 'suitcase-svg',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2207 20.25V5.25C16.2207 4.85218 16.0627 4.47064 15.7814 4.18934C15.5001 3.90804 15.1185 3.75 14.7207 3.75H10.2207C9.82288 3.75 9.44135 3.90804 9.16004 4.18934C8.87874 4.47064 8.7207 4.85218 8.7207 5.25V20.25M4.2207 6.75H20.7207C21.1349 6.75 21.4707 7.08579 21.4707 7.5V19.5C21.4707 19.9142 21.1349 20.25 20.7207 20.25H4.2207C3.80649 20.25 3.4707 19.9142 3.4707 19.5V7.5C3.4707 7.08579 3.80649 6.75 4.2207 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    