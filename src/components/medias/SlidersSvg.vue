<script>
export default {
  name: 'sliders-svg',
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
<path d="M12.5881 10.125L12.5882 20.25M12.5881 10.125C13.6237 10.125 14.4631 9.28553 14.4631 8.25C14.4631 7.21447 13.6237 6.375 12.5881 6.375M12.5881 10.125C11.5526 10.125 10.7131 9.28553 10.7131 8.25C10.7131 7.21447 11.5526 6.375 12.5881 6.375M12.5882 3.75L12.5881 6.375M19.3381 17.625L19.3383 20.25M19.3381 17.625C20.3737 17.625 21.2131 16.7855 21.2131 15.75C21.2131 14.7145 20.3737 13.875 19.3381 13.875M19.3381 17.625C18.3026 17.625 17.4631 16.7855 17.4631 15.75C17.4631 14.7145 18.3026 13.875 19.3381 13.875M19.3383 3.75L19.3381 13.875M5.83817 14.625L5.83808 20.25M5.83817 14.625C6.8737 14.625 7.71314 13.7855 7.71314 12.75C7.71314 11.7145 6.8737 10.875 5.83817 10.875M5.83817 14.625C4.80263 14.625 3.96313 13.7855 3.96313 12.75C3.96313 11.7145 4.80263 10.875 5.83817 10.875M5.83808 3.75L5.83817 10.875" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    