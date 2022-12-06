<script>
export default {
  name: 'square-logo',
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
<path d="M19.5588 3.75H4.55882C4.14461 3.75 3.80882 4.08579 3.80882 4.5V19.5C3.80882 19.9142 4.14461 20.25 4.55882 20.25H19.5588C19.973 20.25 20.3088 19.9142 20.3088 19.5V4.5C20.3088 4.08579 19.973 3.75 19.5588 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0588 9H9.05882V15H15.0588V9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    