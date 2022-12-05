<script>
export default {
  name: 'number-square-nine',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6261 11.8129L11.6028 16.875M4.85278 3.75H19.8528C20.267 3.75 20.6028 4.08579 20.6028 4.5V19.5C20.6028 19.9142 20.267 20.25 19.8528 20.25H4.85278C4.43857 20.25 4.10278 19.9142 4.10278 19.5V4.5C4.10278 4.08579 4.43857 3.75 4.85278 3.75ZM14.9778 10.5C14.9778 11.9497 13.8025 13.125 12.3528 13.125C10.903 13.125 9.72778 11.9497 9.72778 10.5C9.72778 9.05025 10.903 7.875 12.3528 7.875C13.8025 7.875 14.9778 9.05025 14.9778 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    