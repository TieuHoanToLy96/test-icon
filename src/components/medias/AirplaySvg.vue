<script>
export default {
  name: 'airplay-svg',
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
<path d="M6.23523 18H4.73523C4.3374 18 3.95587 17.842 3.67457 17.5607C3.39326 17.2794 3.23523 16.8978 3.23523 16.5V6C3.23523 5.60218 3.39326 5.22064 3.67457 4.93934C3.95587 4.65804 4.3374 4.5 4.73523 4.5H19.7352C20.1331 4.5 20.5146 4.65804 20.7959 4.93934C21.0772 5.22064 21.2352 5.60218 21.2352 6V16.5C21.2352 16.8978 21.0772 17.2794 20.7959 17.5607C20.5146 17.842 20.1331 18 19.7352 18H18.2352M12.2354 15L16.7352 20.25H7.73523L12.2354 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    