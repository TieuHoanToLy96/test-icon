<script>
export default {
  name: 'buildings-svg',
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
<path d="M1.85291 20.2484H22.8529M13.8524 20.2484V3.74841C13.8524 3.5495 13.7733 3.35874 13.6327 3.21808C13.492 3.07743 13.3013 2.99841 13.1024 2.99841H4.10236C3.90344 2.99841 3.71268 3.07743 3.57203 3.21808C3.43137 3.35874 3.35236 3.5495 3.35236 3.74841V20.2484M21.3524 20.2484V9.74841C21.3524 9.5495 21.2733 9.35874 21.1327 9.21808C20.992 9.07743 20.8013 8.99841 20.6024 8.99841H13.8524M6.35236 6.74841H9.35236M7.85236 12.7484H10.8524M6.35236 16.4984H9.35236M16.8524 16.4984H18.3524M16.8524 12.7484H18.3524" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    