<script>
export default {
  name: 'home-infinity',
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
<path d="M19 14V12H21L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H9.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.3573 13 13.708 13.0958 14.0158 13.2772C14.3236 13.4587 14.5771 13.7194 14.75 14.032" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.536 17.586C15.1412 17.2098 14.6168 17 14.0715 17C13.5262 17 13.0018 17.2098 12.607 17.586C12.4153 17.7683 12.2626 17.9876 12.1583 18.2307C12.054 18.4737 12.0002 18.7355 12.0002 19C12.0002 19.2645 12.054 19.5263 12.1583 19.7693C12.2626 20.0124 12.4153 20.2317 12.607 20.414C13.416 21.195 14.727 21.195 15.536 20.414C16.345 19.633 14.731 21.192 15.54 20.411L17 19.001L18.46 17.582" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.54 17.582L17 19.002L18.46 20.412C19.269 21.192 17.655 19.633 18.464 20.414C19.273 21.195 20.584 21.195 21.393 20.414C21.5847 20.2317 21.7374 20.0124 21.8417 19.7693C21.946 19.5263 21.9998 19.2645 21.9998 19C21.9998 18.7355 21.946 18.4737 21.8417 18.2307C21.7374 17.9876 21.5847 17.7683 21.393 17.586C20.9982 17.2098 20.4738 17 19.9285 17C19.3832 17 18.8588 17.2098 18.464 17.586" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    