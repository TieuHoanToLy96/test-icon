<script>
export default {
  name: 'device-nintendo-off',
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
<path d="M4.713 4.718C4.18385 5.08625 3.75168 5.57708 3.45338 6.1486C3.15509 6.72011 2.99953 7.35532 3 8V16C3 17.0609 3.42143 18.0783 4.17157 18.8284C4.92172 19.5786 5.93913 20 7 20H10V10M10 6V4H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10V4H17C18.0609 4 19.0783 4.42143 19.8284 5.17157C20.5786 5.92172 21 6.93913 21 8V16C21 16.308 20.965 16.608 20.9 16.896M19.28 19.286C18.611 19.7518 17.8152 20.001 17 20H14V14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 9.5C7.05228 9.5 7.5 9.05228 7.5 8.5C7.5 7.94772 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5C5.5 9.05228 5.94772 9.5 6.5 9.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    