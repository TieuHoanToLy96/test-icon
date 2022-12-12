<script>
export default {
  name: 'device-mobile-camera',
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
<path d="M12.8235 8C13.3758 8 13.8235 7.55228 13.8235 7C13.8235 6.44772 13.3758 6 12.8235 6C12.2712 6 11.8235 6.44772 11.8235 7C11.8235 7.55228 12.2712 8 12.8235 8Z" fill="currentColor"/>
<path d="M17.3235 3H8.32349C7.49506 3 6.82349 3.61991 6.82349 4.38462V19.6154C6.82349 20.3801 7.49506 21 8.32349 21H17.3235C18.1519 21 18.8235 20.3801 18.8235 19.6154V4.38462C18.8235 3.61991 18.1519 3 17.3235 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    