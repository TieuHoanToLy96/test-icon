<script>
export default {
  name: 'download-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2056 12H21.7056C21.9045 12 22.0952 12.079 22.2359 12.2197C22.3766 12.3603 22.4556 12.5511 22.4556 12.75V18.75C22.4556 18.9489 22.3766 19.1397 22.2359 19.2803C22.0952 19.421 21.9045 19.5 21.7056 19.5H3.70557C3.50665 19.5 3.31589 19.421 3.17524 19.2803C3.03458 19.1397 2.95557 18.9489 2.95557 18.75V12.75C2.95557 12.5511 3.03458 12.3603 3.17524 12.2197C3.31589 12.079 3.50665 12 3.70557 12H8.20557M12.7056 2.25V12M12.7056 12L8.20557 7.5M12.7056 12L17.2056 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3297 16.6875C18.847 16.6875 19.2663 16.2678 19.2663 15.75C19.2663 15.2322 18.847 14.8125 18.3297 14.8125C17.8124 14.8125 17.3931 15.2322 17.3931 15.75C17.3931 16.2678 17.8124 16.6875 18.3297 16.6875Z" fill="currentColor"/>
</svg>

</template>
    