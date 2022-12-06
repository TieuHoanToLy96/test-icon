<script>
export default {
  name: 'bed-svg',
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
<path d="M10.1617 15.75V7.5M10.1617 7.5H19.9117C20.7074 7.5 21.4705 7.81607 22.0331 8.37868C22.5957 8.94129 22.9117 9.70435 22.9117 10.5V15.75M10.1617 7.5H1.91174M22.9117 15.75H1.91174M22.9117 15.75V19.5M1.91174 19.5V4.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    