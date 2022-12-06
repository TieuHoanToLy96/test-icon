<script>
export default {
  name: 'trash-simple',
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
<path d="M20.4263 5.25L3.92627 5.25001M8.42664 2.25H15.9266M18.9266 5.25V19.5C18.9266 19.6989 18.8476 19.8897 18.707 20.0303C18.5663 20.171 18.3755 20.25 18.1766 20.25H6.17664C5.97772 20.25 5.78696 20.171 5.64631 20.0303C5.50565 19.8897 5.42664 19.6989 5.42664 19.5V5.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    