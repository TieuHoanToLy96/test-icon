<script>
export default {
  name: 'number-square-seven',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.98523 7.875H14.4852L11.4852 16.875M4.73523 3.75H19.7352C20.1494 3.75 20.4852 4.08579 20.4852 4.5V19.5C20.4852 19.9142 20.1494 20.25 19.7352 20.25H4.73523C4.32102 20.25 3.98523 19.9142 3.98523 19.5V4.5C3.98523 4.08579 4.32102 3.75 4.73523 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    