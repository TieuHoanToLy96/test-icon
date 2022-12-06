<script>
export default {
  name: 'tennis-ball',
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
<path d="M12.1609 3.00002C12.1568 5.38153 11.2089 7.66432 9.5249 9.34831C7.84092 11.0323 5.55814 11.9802 3.17663 11.9844M21.1765 12.0156C18.795 12.0198 16.5122 12.9676 14.8282 14.6516C13.1442 16.3356 12.1963 18.6184 12.1921 20.9999M21.1765 12C21.1765 16.9706 17.1471 21 12.1765 21C7.20595 21 3.17651 16.9706 3.17651 12C3.17651 7.02944 7.20595 3 12.1765 3C17.1471 3 21.1765 7.02944 21.1765 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    