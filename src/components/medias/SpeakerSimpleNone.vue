<script>
export default {
  name: 'speaker-simple-none',
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
<path d="M8.14722 15.75H3.64722C3.4483 15.75 3.25754 15.671 3.11689 15.5303C2.97623 15.3897 2.89722 15.1989 2.89722 15V9C2.89722 8.80109 2.97623 8.61032 3.11689 8.46967C3.25754 8.32902 3.4483 8.25 3.64722 8.25H8.14722L14.8972 3V21L8.14722 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    