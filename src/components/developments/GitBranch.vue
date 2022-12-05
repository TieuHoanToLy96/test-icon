<script>
export default {
  name: 'git-branch',
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
<path d="M6.55151 15V14.25C6.55153 13.6533 6.78858 13.081 7.21053 12.659C7.63247 12.2371 8.20475 12.0001 8.80147 12.0001L15.5516 11.9999C16.1483 11.9999 16.7206 11.7629 17.1425 11.3409C17.5645 10.919 17.8015 10.3467 17.8015 9.75V8.99998M6.55151 15V8.99998M6.55151 15C5.10177 15 3.92651 16.1752 3.92651 17.625C3.92651 19.0747 5.10177 20.25 6.55151 20.25C8.00126 20.25 9.17651 19.0747 9.17651 17.625C9.17651 16.1752 8.00126 15 6.55151 15ZM17.8015 8.99998C19.2513 8.99998 20.4265 7.8245 20.4265 6.37476C20.4265 4.92501 19.2513 3.74976 17.8015 3.74976C16.3518 3.74976 15.1765 4.92501 15.1765 6.37476C15.1765 7.8245 16.3518 8.99998 17.8015 8.99998ZM6.55151 8.99998C8.00126 8.99998 9.17651 7.8245 9.17651 6.37476C9.17651 4.92501 8.00126 3.74976 6.55151 3.74976C5.10177 3.74976 3.92651 4.92501 3.92651 6.37476C3.92651 7.8245 5.10177 8.99998 6.55151 8.99998Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    