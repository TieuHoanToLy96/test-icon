<script>
export default {
  name: 'sunrise-svg',
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
<path d="M3 17.0001H4M20 17.0001H21M5.6 10.6001L6.3 11.3001M18.4 10.6001L17.7 11.3001M8 17.0001C8 15.9392 8.42143 14.9218 9.17157 14.1717C9.92172 13.4215 10.9391 13.0001 12 13.0001C13.0609 13.0001 14.0783 13.4215 14.8284 14.1717C15.5786 14.9218 16 15.9392 16 17.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9V3L15 6M9 6L12 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    