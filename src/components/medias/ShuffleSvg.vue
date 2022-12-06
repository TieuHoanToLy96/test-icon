<script>
export default {
  name: 'shuffle-svg',
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
<path d="M3.64722 6.75H5.80951C6.76456 6.75 7.7058 6.97798 8.555 7.41499C9.4042 7.852 10.1368 8.48542 10.6919 9.26257L14.6025 14.7374C15.1576 15.5146 15.8902 16.148 16.7394 16.585C17.5886 17.022 18.5299 17.25 19.4849 17.25H22.3972M22.3972 17.25L20.1472 15M22.3972 17.25L20.1472 19.5M20.1472 4.5L22.3972 6.75M22.3972 6.75L20.1472 9M22.3972 6.75H19.4849C18.5299 6.75 17.5886 6.97798 16.7394 7.41499C15.8902 7.85201 15.1576 8.48542 14.6025 9.26257L14.4906 9.41926M3.64722 17.25H5.80951C6.76456 17.25 7.7058 17.022 8.555 16.585C9.4042 16.148 10.1368 15.5146 10.6919 14.7374L10.8038 14.5807" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    