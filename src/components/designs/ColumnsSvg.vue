<script>
export default {
  name: 'columns-svg',
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
<path d="M10.5001 19.5V4.5C10.5001 4.08579 10.1643 3.75 9.75012 3.75H6.00012C5.58591 3.75 5.25012 4.08579 5.25012 4.5V19.5C5.25012 19.9142 5.58591 20.25 6.00012 20.25H9.75012C10.1643 20.25 10.5001 19.9142 10.5001 19.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7501 19.5V4.5C18.7501 4.08579 18.4143 3.75 18.0001 3.75H14.2501C13.8359 3.75 13.5001 4.08579 13.5001 4.5V19.5C13.5001 19.9142 13.8359 20.25 14.2501 20.25H18.0001C18.4143 20.25 18.7501 19.9142 18.7501 19.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    