<script>
export default {
  name: 'folder-minus',
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
<path d="M3.88232 7.5V18.8077C3.88286 18.9911 3.95597 19.1669 4.08569 19.2966C4.21541 19.4264 4.39119 19.4995 4.57463 19.5H21.2157C21.3925 19.5 21.562 19.4298 21.6871 19.3047C21.8121 19.1797 21.8823 19.0101 21.8823 18.8333V8.25C21.8823 8.05109 21.8033 7.86032 21.6627 7.71967C21.522 7.57902 21.3312 7.5 21.1323 7.5H3.88232ZM3.88232 7.5V5.25C3.88232 5.05109 3.96134 4.86032 4.10199 4.71967C4.24265 4.57902 4.43341 4.5 4.63232 4.5H9.57166C9.67016 4.5 9.76768 4.5194 9.85868 4.55709C9.94967 4.59478 10.0324 4.65003 10.102 4.71967L12.8823 7.5M10.6323 13.5H15.1323" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    