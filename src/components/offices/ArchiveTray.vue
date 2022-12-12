<script>
export default {
  name: 'archive-tray',
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
<path d="M9.75901 11.068L12.941 14.25M12.941 14.25L16.1229 11.068M12.941 14.25V6.75M4.69043 15H8.12977C8.22826 15 8.32579 15.0194 8.41678 15.0571C8.50778 15.0948 8.59046 15.15 8.6601 15.2197L10.4708 17.0303C10.5404 17.1 10.6231 17.1552 10.7141 17.1929C10.8051 17.2306 10.9026 17.25 11.0011 17.25H14.8798C14.9783 17.25 15.0758 17.2306 15.1668 17.1929C15.2578 17.1552 15.3405 17.1 15.4101 17.0303L17.2208 15.2197C17.2904 15.15 17.3731 15.0948 17.4641 15.0571C17.5551 15.0194 17.6526 15 17.7511 15H21.1904M5.44098 3.75H20.441C20.8552 3.75 21.191 4.08579 21.191 4.5V19.5C21.191 19.9142 20.8552 20.25 20.441 20.25H5.44098C5.02677 20.25 4.69098 19.9142 4.69098 19.5V4.5C4.69098 4.08579 5.02677 3.75 5.44098 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    