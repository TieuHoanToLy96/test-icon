<script>
export default {
  name: 'connect2-svg',
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
<path d="M7.5 16.5L2.25 21.75M21.75 2.25L16.5 7.5M8.625 8.625L15.375 15.375M21 15L18.75 14.25M5.25 9.75L3 9M9 3L9.75 5.25M14.25 18.75L15 21M6.46645 12.2851L12.2868 6.46469C13.1655 5.58601 14.5901 5.58601 15.4688 6.46469L17.5371 8.53298C18.4158 9.41166 18.4158 10.8363 17.5371 11.715L11.7167 17.5353C10.838 18.414 9.41342 18.414 8.53474 17.5353L6.46645 15.467C5.58777 14.5884 5.58777 13.1637 6.46645 12.2851Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    