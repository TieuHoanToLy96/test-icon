<script>
export default {
  name: 'cake-off',
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
<path d="M21 17V12C21 11.2044 20.6839 10.4413 20.1213 9.87868C19.5587 9.31607 18.7956 9 18 9H13M9 9H6C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12V20H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.99609 14.803C3.30809 14.938 3.65009 15.007 4.00009 15C4.38959 15.0082 4.77522 14.9214 5.12367 14.7472C5.47212 14.573 5.77292 14.3165 6.00009 14C6.22726 13.6835 6.52807 13.4271 6.87652 13.2529C7.22497 13.0787 7.6106 12.9919 8.00009 13C8.38959 12.9919 8.77522 13.0787 9.12367 13.2529C9.47212 13.4271 9.77292 13.6835 10.0001 14C10.2273 14.3165 10.5281 14.573 10.8765 14.7472C11.225 14.9214 11.6106 15.0082 12.0001 15C12.3896 15.0082 12.7752 14.9214 13.1237 14.7472C13.4721 14.573 13.7729 14.3165 14.0001 14M18.0001 14C18.2273 14.3165 18.5281 14.573 18.8765 14.7472C19.225 14.9214 19.6106 15.0082 20.0001 15C20.3501 15.007 20.6921 14.938 21.0041 14.803" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1721 6.188C10.2421 6.03 10.3351 5.878 10.4501 5.737L12.0001 4L13.4651 5.638C13.6821 5.87104 13.8404 6.15253 13.9266 6.45906C14.0129 6.76558 14.0248 7.08828 13.9612 7.40031C13.8976 7.71233 13.7605 8.00467 13.5611 8.25299C13.3618 8.50132 13.106 8.69845 12.8151 8.828" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    