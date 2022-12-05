<script>
export default {
  name: 'bug-beetle',
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
<path d="M12.2941 21C16.022 21 19.0441 17.9779 19.0441 14.25V9.74999C19.0441 6.02208 16.022 3 12.2941 3C8.56614 3 5.54407 6.02208 5.54407 9.74999V14.25C5.54407 17.9779 8.56616 21 12.2941 21ZM12.2941 21L12.2941 12.75M19.0441 12.75H21.2941M3.29407 12.75H5.54407M3.29407 15.75H5.71136M3.29407 9.75H21.2941M18.8768 15.75H21.2941M5.53748 2.625L7.76547 4.74455M19.0375 2.625L16.8159 4.73844" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    