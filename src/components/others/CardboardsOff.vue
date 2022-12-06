<script>
export default {
  name: 'cardboards-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.96 16.953C20.986 16.806 21 16.655 21 16.5V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H10M6 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16.5C3 17.163 3.26339 17.7989 3.73223 18.2678C4.20107 18.7366 4.83696 19 5.5 19H6.56C7.0098 18.9991 7.45365 18.8971 7.8587 18.7015C8.26374 18.5059 8.61962 18.2217 8.9 17.87L10.44 15.95C10.6274 15.7164 10.8649 15.5279 11.1349 15.3984C11.4049 15.2688 11.7005 15.2016 12 15.2016C12.2995 15.2016 12.5951 15.2688 12.8651 15.3984C13.1351 15.5279 13.3726 15.7164 13.56 15.95L15.1 17.87C15.3804 18.2217 15.7363 18.5059 16.1413 18.7015C16.5464 18.8971 16.9902 18.9991 17.44 19H18.5C18.655 19 18.807 18.986 18.954 18.959" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.714 12.7001C16.8958 12.5111 16.9961 12.2583 16.9933 11.9961C16.9905 11.7339 16.8847 11.4833 16.6989 11.2982C16.5131 11.1132 16.2621 11.0086 15.9998 11.0069C15.7376 11.0052 15.4852 11.1065 15.297 11.2891L16.714 12.6991V12.7001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    