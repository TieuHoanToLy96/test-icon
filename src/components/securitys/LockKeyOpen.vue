<script>
export default {
  name: 'lock-key-open',
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
<path d="M12.9968 15C14.0324 15 14.8718 14.1605 14.8718 13.125C14.8718 12.0895 14.0324 11.25 12.9968 11.25C11.9613 11.25 11.1218 12.0895 11.1218 13.125C11.1218 14.1605 11.9613 15 12.9968 15ZM12.9968 15V17.25M9.62183 8.25V4.875C9.62183 3.97989 9.97741 3.12145 10.6103 2.48851C11.2433 1.85558 12.1017 1.5 12.9968 1.5C13.8919 1.5 14.7504 1.85558 15.3833 2.48851C16.0162 3.12145 16.3718 3.97989 16.3718 4.875M5.49683 8.25H20.4968C20.911 8.25 21.2468 8.58579 21.2468 9V19.5C21.2468 19.9142 20.911 20.25 20.4968 20.25H5.49683C5.08261 20.25 4.74683 19.9142 4.74683 19.5V9C4.74683 8.58579 5.08261 8.25 5.49683 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    