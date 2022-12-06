<script>
export default {
  name: 'eye-closed',
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
<path d="M19.799 11.9348L21.9374 15.6387M15.3958 13.9934L16.0627 17.7756M10.4784 13.9916L9.81135 17.7745M6.07951 11.9318L3.93079 15.6535M3.94116 9.83204C5.51733 11.783 8.40685 14.25 12.9412 14.25C17.4755 14.25 20.3651 11.783 21.9412 9.83206" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    