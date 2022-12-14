<script>
export default {
  name: 'folder-open',
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
<path d="M3.94092 19.5V6C3.94092 5.80109 4.01994 5.61032 4.16059 5.46967C4.30124 5.32902 4.49201 5.25 4.69092 5.25H9.69092C9.8532 5.25 10.0111 5.30263 10.1409 5.4L12.7409 7.35C12.8707 7.44737 13.0286 7.5 13.1909 7.5H19.6909C19.8898 7.5 20.0806 7.57902 20.2213 7.71967C20.3619 7.86032 20.4409 8.05109 20.4409 8.25V10.5M3.94092 19.5L6.76998 11.0128C6.81975 10.8635 6.91526 10.7336 7.04296 10.6416C7.17065 10.5495 7.32408 10.5 7.48149 10.5H22.4004C22.5192 10.5 22.6363 10.5282 22.7421 10.5824C22.8479 10.6365 22.9393 10.7151 23.0088 10.8115C23.0783 10.9079 23.1239 11.0194 23.1418 11.1369C23.1597 11.2544 23.1494 11.3744 23.1119 11.4872L20.4409 19.5H3.94092Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    