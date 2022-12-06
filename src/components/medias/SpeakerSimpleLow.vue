<script>
export default {
  name: 'speaker-simple-low',
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
<path d="M18.5866 9.75V14.25M8.08826 15.75H3.58826C3.38934 15.75 3.19858 15.671 3.05793 15.5303C2.91727 15.3897 2.83826 15.1989 2.83826 15V9C2.83826 8.80109 2.91727 8.61032 3.05793 8.46967C3.19858 8.32902 3.38934 8.25 3.58826 8.25H8.08826L14.8383 3V21L8.08826 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    