<script>
export default {
  name: 'calendar-x',
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
<path d="M17.2056 2.25V5.25M8.20557 2.25V5.25M4.45557 8.25H20.9556M14.9556 12L10.4556 16.5M14.9556 16.5L10.4556 12M5.20557 3.75H20.2056C20.6198 3.75 20.9556 4.08579 20.9556 4.5V19.5C20.9556 19.9142 20.6198 20.25 20.2056 20.25H5.20557C4.79135 20.25 4.45557 19.9142 4.45557 19.5V4.5C4.45557 4.08579 4.79135 3.75 5.20557 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    