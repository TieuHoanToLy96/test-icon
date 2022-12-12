<script>
export default {
  name: 'screencast-svg',
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
<path d="M3.58765 9V5.25C3.58765 5.05109 3.66666 4.86032 3.80732 4.71967C3.94797 4.57902 4.13873 4.5 4.33765 4.5H20.8376C21.0366 4.5 21.2273 4.57902 21.368 4.71967C21.5086 4.86032 21.5876 5.05109 21.5876 5.25V18.75C21.5876 18.9489 21.5086 19.1397 21.368 19.2803C21.2273 19.421 21.0366 19.5 20.8376 19.5H14.0876M3.58765 18C3.98547 18 4.367 18.158 4.64831 18.4393C4.92961 18.7206 5.08765 19.1022 5.08765 19.5M3.58765 15C4.78112 15 5.92571 15.4741 6.76963 16.318C7.61354 17.1619 8.08765 18.3065 8.08765 19.5M3.58765 12C4.57256 12 5.54783 12.194 6.45777 12.5709C7.36771 12.9478 8.19451 13.5003 8.89095 14.1967C9.58739 14.8931 10.1398 15.7199 10.5167 16.6299C10.8937 17.5398 11.0876 18.5151 11.0876 19.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    