<script>
export default {
  name: 'device-tablet-camera',
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
<path d="M12.5282 7.3125C13.0455 7.3125 13.4648 6.89277 13.4648 6.375C13.4648 5.85723 13.0455 5.4375 12.5282 5.4375C12.0109 5.4375 11.5916 5.85723 11.5916 6.375C11.5916 6.89277 12.0109 7.3125 12.5282 7.3125Z" fill="currentColor"/>
<path d="M20.5291 19.5V4.5C20.5291 3.67157 19.8127 3 18.9291 3H6.12905C5.2454 3 4.52905 3.67157 4.52905 4.5V19.5C4.52905 20.3284 5.2454 21 6.12905 21H18.9291C19.8127 21 20.5291 20.3284 20.5291 19.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    