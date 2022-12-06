<script>
export default {
  name: 'ball-tennis',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 5.30005C6.94113 6.14414 7.69387 7.17702 8.20919 8.33143C8.72451 9.48583 8.99084 10.7358 8.99084 12C8.99084 13.2642 8.72451 14.5143 8.20919 15.6687C7.69387 16.8231 6.94113 17.856 6 18.7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 5.30005C17.0589 6.14414 16.3061 7.17702 15.7908 8.33143C15.2755 9.48583 15.0092 10.7358 15.0092 12C15.0092 13.2642 15.2755 14.5143 15.7908 15.6687C16.3061 16.8231 17.0589 17.856 18 18.7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    