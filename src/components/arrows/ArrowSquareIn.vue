<script>
export default {
  name: 'arrow-square-in',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19.125L10.4992 13.5007L4.875 13.5M3.74731 20.2527L10.4973 13.5027M15 18H19.5C19.6989 18 19.8897 17.921 20.0303 17.7803C20.171 17.6397 20.25 17.4489 20.25 17.25V4.5C20.25 4.30109 20.171 4.11032 20.0303 3.96967C19.8897 3.82902 19.6989 3.75 19.5 3.75H6.75C6.55108 3.75 6.36032 3.82902 6.21967 3.96967C6.07901 4.11032 6 4.30109 6 4.5V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    