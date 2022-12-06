<script>
export default {
  name: 'lock-svg',
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
<path d="M9.4458 8.25V4.875C9.4458 3.97989 9.80138 3.12145 10.4343 2.48851C11.0673 1.85558 11.9257 1.5 12.8208 1.5C13.7159 1.5 14.5744 1.85558 15.2073 2.48851C15.8402 3.12145 16.1958 3.97989 16.1958 4.875V8.25M5.3208 8.25H20.3208C20.735 8.25 21.0708 8.58579 21.0708 9V19.5C21.0708 19.9142 20.735 20.25 20.3208 20.25H5.3208C4.90659 20.25 4.5708 19.9142 4.5708 19.5V9C4.5708 8.58579 4.90659 8.25 5.3208 8.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8199 15.1875C13.3372 15.1875 13.7566 14.7678 13.7566 14.25C13.7566 13.7322 13.3372 13.3125 12.8199 13.3125C12.3026 13.3125 11.8833 13.7322 11.8833 14.25C11.8833 14.7678 12.3026 15.1875 12.8199 15.1875Z" fill="currentColor"/>
</svg>

</template>
    