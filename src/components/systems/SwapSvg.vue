<script>
export default {
  name: 'swap-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.20557 14.9994H20.2056C20.4045 14.9994 20.5952 14.9203 20.7359 14.7797C20.8765 14.639 20.9556 14.4483 20.9556 14.2494V4.49936C20.9556 4.30045 20.8765 4.10968 20.7359 3.96903C20.5952 3.82838 20.4045 3.74936 20.2056 3.74936H9.70557C9.50665 3.74936 9.31589 3.82838 9.17524 3.96903C9.03458 4.10968 8.95557 4.30045 8.95557 4.49936V5.24936M8.20557 14.9994L10.4556 12.75M8.20557 14.9994L10.4556 17.25M17.2056 9H5.20557C5.00665 9 4.81589 9.07902 4.67524 9.21967C4.53458 9.36032 4.45557 9.55109 4.45557 9.75V19.5C4.45557 19.6989 4.53458 19.8897 4.67524 20.0303C4.81589 20.171 5.00665 20.25 5.20557 20.25H15.7056C15.9045 20.25 16.0952 20.171 16.2359 20.0303C16.3765 19.8897 16.4556 19.6989 16.4556 19.5V18.75M17.2056 9L14.9556 11.2493M17.2056 9L14.9556 6.74934" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    