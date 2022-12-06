<script>
export default {
  name: 'file-mp3',
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
<g clip-path="url(#clip0_71_12099)">
<path d="M14.5201 3V8.25H20.4001M14.5201 3L20.4001 8.25M14.5201 3H4.4401C4.21732 3 4.00366 3.07902 3.84613 3.21967C3.6886 3.36032 3.6001 3.55109 3.6001 3.75V12M20.4001 8.25V20.25C20.4001 20.4489 20.3116 20.6397 20.1541 20.7803C19.9965 20.921 19.7829 21 19.5601 21H16.2001M12.0001 15.2813C12.394 15.5623 12.7121 15.9189 12.9307 16.3246C13.1492 16.7303 13.2627 17.1748 13.2627 17.625C13.2627 18.0752 13.1492 18.5197 12.9307 18.9254C12.7121 19.3311 12.394 19.6877 12.0001 19.9688M3.6001 19.125V16.125H6.1201L8.6401 14.25V21L6.1201 19.125H3.6001Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_71_12099">
<rect :width="width || size" :height="height || size" fill="white"/>
</clipPath>
</defs>
</svg>

</template>
    