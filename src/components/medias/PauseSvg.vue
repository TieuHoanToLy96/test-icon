<script>
export default {
  name: 'pause-svg',
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
<path d="M19.1028 3.75H15.7278C15.3136 3.75 14.9778 4.08579 14.9778 4.5V19.5C14.9778 19.9142 15.3136 20.25 15.7278 20.25H19.1028C19.517 20.25 19.8528 19.9142 19.8528 19.5V4.5C19.8528 4.08579 19.517 3.75 19.1028 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.97778 3.75H5.60278C5.18857 3.75 4.85278 4.08579 4.85278 4.5V19.5C4.85278 19.9142 5.18857 20.25 5.60278 20.25H8.97778C9.392 20.25 9.72778 19.9142 9.72778 19.5V4.5C9.72778 4.08579 9.392 3.75 8.97778 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    