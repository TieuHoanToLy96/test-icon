<script>
export default {
  name: 'notebook-svg',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6174 10.5H16.6174M10.6174 13.5H16.6174M7.61743 3.75V20.25M4.61743 3.75H19.6174C20.0316 3.75 20.3674 4.08579 20.3674 4.5V19.5C20.3674 19.9142 20.0316 20.25 19.6174 20.25H4.61743C4.20322 20.25 3.86743 19.9142 3.86743 19.5V4.5C3.86743 4.08579 4.20322 3.75 4.61743 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    