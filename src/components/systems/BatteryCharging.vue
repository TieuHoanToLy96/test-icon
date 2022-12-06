<script>
export default {
  name: 'battery-charging',
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
<path d="M23.7791 9V15M12.1541 15.75L13.6541 12H10.6541L12.1541 8.25M20.7791 6.75V17.25C20.7791 18.0784 20.1075 18.75 19.2791 18.75H5.02905C4.20063 18.75 3.52905 18.0784 3.52905 17.25V6.75C3.52905 5.92157 4.20063 5.25 5.02905 5.25H19.2791C20.1075 5.25 20.7791 5.92157 20.7791 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    