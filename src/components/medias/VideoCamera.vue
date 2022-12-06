<script>
export default {
  name: 'video-camera',
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
<path d="M17.7207 10.5L22.9707 7.5V16.5L17.7207 13.5M2.7207 5.625H14.7207C15.5164 5.625 16.2794 5.94107 16.842 6.50368C17.4046 7.06629 17.7207 7.82935 17.7207 8.625V17.625C17.7207 17.8239 17.6417 18.0147 17.501 18.1553C17.3604 18.296 17.1696 18.375 16.9707 18.375H4.9707C4.17505 18.375 3.41199 18.0589 2.84938 17.4963C2.28677 16.9337 1.9707 16.1706 1.9707 15.375V6.375C1.9707 6.17609 2.04972 5.98532 2.19037 5.84467C2.33103 5.70402 2.52179 5.625 2.7207 5.625Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    