<script>
export default {
  name: 'speaker-none',
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
<path d="M7.85278 15.75H3.35278C3.15387 15.75 2.96311 15.671 2.82245 15.5303C2.6818 15.3897 2.60278 15.1989 2.60278 15V9C2.60278 8.80109 2.6818 8.61032 2.82245 8.46967C2.96311 8.32902 3.15387 8.25 3.35278 8.25H7.85278M7.85278 15.75L14.6028 21V3L7.85278 8.25M7.85278 15.75V8.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    