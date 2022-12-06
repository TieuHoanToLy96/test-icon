<script>
export default {
  name: 'shredder-svg',
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
<path d="M19 10H5C4.44772 10 4 10.4477 4 11V14C4 14.5523 4.44772 15 5 15H19C19.5523 15 20 14.5523 20 14V11C20 10.4477 19.5523 10 19 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10V6C17 5.46957 16.7893 4.96086 16.4142 4.58579C16.0391 4.21071 15.5304 4 15 4H9C8.46957 4 7.96086 4.21071 7.58579 4.58579C7.21071 4.96086 7 5.46957 7 6V10M12 15V20M16 15V17M8 15V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    