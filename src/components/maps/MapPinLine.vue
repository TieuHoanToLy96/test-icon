<script>
export default {
  name: 'map-pin-line',
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
<path d="M5.83826 21.75H19.3383M15.5883 9.75C15.5883 11.4069 14.2451 12.75 12.5883 12.75C10.9314 12.75 9.58826 11.4069 9.58826 9.75C9.58826 8.09315 10.9314 6.75 12.5883 6.75C14.2451 6.75 15.5883 8.09315 15.5883 9.75ZM20.0883 9.75C20.0883 16.5 12.5883 21.75 12.5883 21.75C12.5883 21.75 5.08826 16.5 5.08826 9.75C5.08826 7.76088 5.87843 5.85322 7.28496 4.4467C8.69148 3.04018 10.5991 2.25 12.5883 2.25C14.5774 2.25 16.485 3.04018 17.8916 4.4467C19.2981 5.85322 20.0883 7.76088 20.0883 9.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    