<script>
export default {
  name: 'skateboard-svg',
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
<path d="M7 17C8.10457 17 9 16.1046 9 15C9 13.8954 8.10457 13 7 13C5.89543 13 5 13.8954 5 15C5 16.1046 5.89543 17 7 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17C18.1046 17 19 16.1046 19 15C19 13.8954 18.1046 13 17 13C15.8954 13 15 13.8954 15 15C15 16.1046 15.8954 17 17 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9C3 9.26522 3.21071 9.51957 3.58579 9.70711C3.96086 9.89464 4.46957 10 5 10H19C19.5304 10 20.0391 9.89464 20.4142 9.70711C20.7893 9.51957 21 9.26522 21 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    