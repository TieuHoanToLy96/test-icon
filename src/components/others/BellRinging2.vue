<script>
export default {
  name: 'bell-ringing-2',
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
<path d="M19.3641 4.63611C19.739 5.01117 19.9497 5.51978 19.9497 6.05011C19.9497 6.58044 19.739 7.08906 19.3641 7.46411C19.7924 8.66024 19.887 9.95039 19.638 11.1962C19.3889 12.4421 18.8054 13.5966 17.9501 14.5361L15.8281 16.6561C15.4417 17.149 15.1763 17.7258 15.0535 18.3399C14.9307 18.9541 14.9539 19.5885 15.1211 20.1921L3.80811 8.88011C4.41155 9.04716 5.04579 9.07022 5.65977 8.94742C6.27375 8.82463 6.85033 8.55941 7.34311 8.17311L9.46411 6.05011C10.4036 5.19483 11.5582 4.61136 12.804 4.36226C14.0498 4.11316 15.34 4.20783 16.5361 4.63611C16.9112 4.26117 17.4198 4.05054 17.9501 4.05054C18.4804 4.05054 18.989 4.26117 19.3641 4.63611V4.63611Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.34308 12.4141L6.63608 13.1211C6.07342 13.6837 5.75732 14.4468 5.75732 15.2426C5.75732 16.0383 6.07342 16.8014 6.63608 17.3641C7.19874 17.9267 7.96186 18.2428 8.75758 18.2428C9.55329 18.2428 10.3164 17.9267 10.8791 17.3641L11.5861 16.6571" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    