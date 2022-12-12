<script>
export default {
  name: 'currency-rupee-nepalese',
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
<path d="M15 5H4H7C8.06087 5 9.07828 5.42143 9.82843 6.17157C10.5786 6.92172 11 7.93913 11 9C11 10.0609 10.5786 11.0783 9.82843 11.8284C9.07828 12.5786 8.06087 13 7 13H4L10 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0001 17.0001L16.4141 12.5861C16.0369 12.2218 15.5317 12.0202 15.0073 12.0247C14.4829 12.0293 13.9813 12.2396 13.6104 12.6104C13.2396 12.9813 13.0293 13.4829 13.0247 14.0073C13.0202 14.5317 13.2218 15.0369 13.5861 15.4141L14.2931 16.1211" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    