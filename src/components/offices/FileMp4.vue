<script>
export default {
  name: 'file-mp4',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_71_12105)">
<path d="M14.8001 3V8.25H20.4001M14.8001 3L20.4001 8.25M14.8001 3H5.2001C4.98792 3 4.78444 3.07902 4.63441 3.21967C4.48438 3.36032 4.4001 3.55109 4.4001 3.75V12M20.4001 8.25V20.25C20.4001 20.4489 20.3158 20.6397 20.1658 20.7803C20.0158 20.921 19.8123 21 19.6001 21H17.2001M10.8001 16.875L14.0001 15.375V19.9875L10.8001 18.375M4.4001 15H10.0001C10.4419 15 10.8001 15.3358 10.8001 15.75V19.5C10.8001 19.9142 10.4419 20.25 10.0001 20.25H4.4001C3.95827 20.25 3.6001 19.9142 3.6001 19.5V15.75C3.6001 15.3358 3.95827 15 4.4001 15Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_71_12105">
<rect :width="width || size" :height="height || size" fill="white"/>
</clipPath>
</defs>
</svg>

</template>
    