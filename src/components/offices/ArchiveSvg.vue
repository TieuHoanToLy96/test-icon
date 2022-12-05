<script>
export default {
  name: 'archive-svg',
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
<path d="M21.0732 9V18C21.0732 18.1989 20.9942 18.3897 20.8536 18.5303C20.7129 18.671 20.5222 18.75 20.3232 18.75H5.32324C5.12433 18.75 4.93356 18.671 4.79291 18.5303C4.65226 18.3897 4.57324 18.1989 4.57324 18V9M10.5732 12.75H15.0732M3.82324 5.25H21.8232C22.2375 5.25 22.5732 5.58579 22.5732 6V8.25C22.5732 8.66421 22.2375 9 21.8232 9H3.82324C3.40903 9 3.07324 8.66421 3.07324 8.25V6C3.07324 5.58579 3.40903 5.25 3.82324 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    