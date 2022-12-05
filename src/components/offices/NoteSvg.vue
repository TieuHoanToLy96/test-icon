<script>
export default {
  name: 'note-svg',
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
<path d="M9.94092 9H15.9409M9.94092 12H15.9409M9.94092 15H12.9409M21.1231 14.9993H15.9409V20.1818M15.6303 20.25H5.44092C5.24201 20.25 5.05124 20.171 4.91059 20.0303C4.76994 19.8897 4.69092 19.6989 4.69092 19.5V4.5C4.69092 4.30109 4.76994 4.11032 4.91059 3.96967C5.05124 3.82902 5.24201 3.75 5.44092 3.75H20.4409C20.6398 3.75 20.8306 3.82902 20.9712 3.96967C21.1119 4.11032 21.1909 4.30109 21.1909 4.5V14.6893C21.1909 14.7878 21.1715 14.8854 21.1338 14.9764C21.0961 15.0673 21.0409 15.15 20.9712 15.2197L16.1606 20.0303C16.0909 20.1 16.0083 20.1552 15.9173 20.1929C15.8263 20.2306 15.7287 20.25 15.6303 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    