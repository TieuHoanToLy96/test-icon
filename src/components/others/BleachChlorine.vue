<script>
export default {
  name: 'bleach-chlorine',
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
<path d="M5.00001 19H19C19.3263 18.9977 19.6471 18.9156 19.9344 18.7609C20.2217 18.6061 20.4668 18.3835 20.6482 18.1123C20.8297 17.841 20.942 17.5296 20.9755 17.205C21.0089 16.8804 20.9624 16.5525 20.84 16.25L13.74 4.00002C13.567 3.68741 13.3135 3.42685 13.0058 3.2454C12.698 3.06396 12.3473 2.96826 11.99 2.96826C11.6327 2.96826 11.282 3.06396 10.9743 3.2454C10.6665 3.42685 10.413 3.68741 10.24 4.00002L3.14001 16.25C3.01995 16.5456 2.97234 16.8656 3.00116 17.1833C3.02997 17.501 3.13438 17.8073 3.30566 18.0764C3.47694 18.3456 3.71012 18.5698 3.98573 18.7305C4.26135 18.8912 4.5714 18.9836 4.89001 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12H10C9.46957 12 8.96086 12.2107 8.58579 12.5858C8.21071 12.9609 8 13.4696 8 14C8 14.5304 8.21071 15.0391 8.58579 15.4142C8.96086 15.7893 9.46957 16 10 16H11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12V16H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    