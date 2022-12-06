<script>
export default {
  name: 'pencil-line',
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
<path d="M9 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V15.3107C3.75 15.2122 3.7694 15.1146 3.80709 15.0236C3.84478 14.9326 3.90003 14.85 3.96967 14.7803L15.2197 3.53032C15.3603 3.38967 15.5511 3.31065 15.75 3.31065C15.9489 3.31065 16.1397 3.38967 16.2803 3.53032L20.4697 7.71966C20.6103 7.86032 20.6893 8.05108 20.6893 8.24999C20.6893 8.44891 20.6103 8.63967 20.4697 8.78032L9 20.25ZM9 20.25H20.25M9 20.25L3.79772 15.0477M12.75 5.99999L18 11.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    