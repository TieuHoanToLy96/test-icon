<script>
export default {
  name: 'lamp-2',
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
<path d="M5 21H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21L3 13L11.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9999 13.9999C10.8519 11.8519 10.8519 8.14786 12.9999 5.99986C15.0879 3.91186 18.8419 4.02786 20.9999 5.99986L12.9999 13.9999Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.7421 7.57397L10.5861 6.41797C10.2109 6.04295 10.0001 5.53427 10 5.00382C9.99991 4.47338 10.2105 3.96462 10.5856 3.58947C10.9606 3.21432 11.4693 3.00351 11.9997 3.00342C12.5301 3.00332 13.0389 3.21395 13.4141 3.58897L14.5581 4.73297" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 11.995L15.708 12.269C16.1812 12.7375 16.8201 13.0003 17.486 13.0003C18.1519 13.0003 18.7908 12.7375 19.264 12.269C20.203 11.336 20.244 9.849 19.386 8.869L19.02 8.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    