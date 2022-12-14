<script>
export default {
  name: 'lock-key',
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
<path d="M12.9382 15C13.9738 15 14.8132 14.1605 14.8132 13.125C14.8132 12.0895 13.9738 11.25 12.9382 11.25C11.9027 11.25 11.0632 12.0895 11.0632 13.125C11.0632 14.1605 11.9027 15 12.9382 15ZM12.9382 15V17.25M9.56323 8.25V4.875C9.56323 3.97989 9.91881 3.12145 10.5517 2.48851C11.1847 1.85558 12.0431 1.5 12.9382 1.5C13.8333 1.5 14.6918 1.85558 15.3247 2.48851C15.9577 3.12145 16.3132 3.97989 16.3132 4.875V8.25M5.43823 8.25H20.4382C20.8524 8.25 21.1882 8.58579 21.1882 9V19.5C21.1882 19.9142 20.8524 20.25 20.4382 20.25H5.43823C5.02402 20.25 4.68823 19.9142 4.68823 19.5V9C4.68823 8.58579 5.02402 8.25 5.43823 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    