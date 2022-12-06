<script>
export default {
  name: 'arrow-arc-right',
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
<path d="M15.3639 13.886H21.3639M21.3639 13.886V7.88605M21.3639 13.886L18.364 10.886C17.1053 9.62735 15.5016 8.77018 13.7558 8.42291C12.01 8.07565 10.2004 8.25388 8.55585 8.93507C6.91131 9.61626 5.5057 10.7698 4.51677 12.2499C3.52784 13.7299 3 15.47 3 17.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    