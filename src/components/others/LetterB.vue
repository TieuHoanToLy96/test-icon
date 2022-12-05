<script>
export default {
  name: 'letter-b',
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
<path d="M7 20V4H13C14.0609 4 15.0783 4.42143 15.8284 5.17157C16.5786 5.92172 17 6.93913 17 8C17 9.06087 16.5786 10.0783 15.8284 10.8284C15.0783 11.5786 14.0609 12 13 12C14.0609 12 15.0783 12.4214 15.8284 13.1716C16.5786 13.9217 17 14.9391 17 16C17 17.0609 16.5786 18.0783 15.8284 18.8284C15.0783 19.5786 14.0609 20 13 20H7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    