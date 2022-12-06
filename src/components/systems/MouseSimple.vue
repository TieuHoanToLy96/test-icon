<script>
export default {
  name: 'mouse-simple',
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
<path d="M12.5291 10.5L12.5291 6.75M10.6541 3H14.4041C17.3035 3 19.6541 5.3505 19.6541 8.25V15.75C19.6541 18.6495 17.3035 21 14.4041 21H10.6541C7.75456 21 5.40405 18.6495 5.40405 15.75V8.25C5.40405 5.3505 7.75456 3 10.6541 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    