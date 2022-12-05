<script>
export default {
  name: 'christmas-tree',
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
<path d="M12 3L16 7L14 8L18 12L15 13L19 17H5L9 13L6 12L10 8L8 7L12 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17V20C14 20.2652 13.8946 20.5196 13.7071 20.7071C13.5196 20.8946 13.2652 21 13 21H11C10.7348 21 10.4804 20.8946 10.2929 20.7071C10.1054 20.5196 10 20.2652 10 20V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    