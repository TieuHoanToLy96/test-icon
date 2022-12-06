<script>
export default {
  name: 'lock-simple-open',
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
<path d="M8.85693 8.25V4.875C8.85693 3.97989 9.21251 3.12145 9.84545 2.48851C10.4784 1.85558 11.3368 1.5 12.2319 1.5C13.127 1.5 13.9855 1.85558 14.6184 2.48851C15.2514 3.12145 15.6069 3.97989 15.6069 4.875M4.73193 8.25H19.7319C20.1461 8.25 20.4819 8.58579 20.4819 9V19.5C20.4819 19.9142 20.1461 20.25 19.7319 20.25H4.73193C4.31772 20.25 3.98193 19.9142 3.98193 19.5V9C3.98193 8.58579 4.31772 8.25 4.73193 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    