<script>
export default {
  name: 'user-rectangle',
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
<path d="M12.2354 15C14.3064 15 15.9854 13.3211 15.9854 11.25C15.9854 9.17893 14.3064 7.5 12.2354 7.5C10.1643 7.5 8.48535 9.17893 8.48535 11.25C8.48535 13.3211 10.1643 15 12.2354 15ZM12.2354 15C10.8393 15 9.47762 15.4327 8.33763 16.2385C7.19763 17.0443 6.3354 18.1836 5.86959 19.4996M12.2354 15C13.6314 15 14.9931 15.4327 16.1331 16.2385C17.2731 17.0443 18.1353 18.1836 18.6011 19.4996M3.98535 4.5H20.4854C20.8996 4.5 21.2354 4.83579 21.2354 5.25V18.75C21.2354 19.1642 20.8996 19.5 20.4854 19.5H3.98535C3.57114 19.5 3.23535 19.1642 3.23535 18.75V5.25C3.23535 4.83579 3.57114 4.5 3.98535 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    