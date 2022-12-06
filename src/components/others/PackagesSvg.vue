<script>
export default {
  name: 'packages-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 13H4C2.89543 13 2 13.8954 2 15V19C2 20.1046 2.89543 21 4 21H8C9.10457 21 10 20.1046 10 19V15C10 13.8954 9.10457 13 8 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3H10C8.89543 3 8 3.89543 8 5V9C8 10.1046 8.89543 11 10 11H14C15.1046 11 16 10.1046 16 9V5C16 3.89543 15.1046 3 14 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 13H16C14.8954 13 14 13.8954 14 15V19C14 20.1046 14.8954 21 16 21H20C21.1046 21 22 20.1046 22 19V15C22 13.8954 21.1046 13 20 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 13V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    