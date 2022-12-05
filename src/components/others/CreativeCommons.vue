<script>
export default {
  name: 'creative-commons',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 10.5C9.65296 9.79004 8.36796 9.84204 7.58596 10.616C7.40065 10.7958 7.25331 11.0109 7.1527 11.2486C7.05209 11.4864 7.00024 11.7419 7.00024 12C7.00024 12.2582 7.05209 12.5137 7.1527 12.7515C7.25331 12.9892 7.40065 13.2043 7.58596 13.384C8.36796 14.158 9.65296 14.209 10.5 13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 10.5C15.653 9.79004 14.368 9.84204 13.586 10.616C13.4006 10.7958 13.2533 11.0109 13.1527 11.2486C13.0521 11.4864 13.0002 11.7419 13.0002 12C13.0002 12.2582 13.0521 12.5137 13.1527 12.7515C13.2533 12.9892 13.4006 13.2043 13.586 13.384C14.368 14.158 15.653 14.209 16.5 13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    