<script>
export default {
  name: 'number-circle-six',
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
<path d="M10.256 12.1865L13.2793 7.125M21.5293 12C21.5293 16.9706 17.4999 21 12.5293 21C7.55873 21 3.5293 16.9706 3.5293 12C3.5293 7.02944 7.55873 3 12.5293 3C17.4999 3 21.5293 7.02944 21.5293 12ZM15.1543 13.5C15.1543 14.9497 13.979 16.125 12.5293 16.125C11.0796 16.125 9.9043 14.9497 9.9043 13.5C9.9043 12.0503 11.0796 10.875 12.5293 10.875C13.979 10.875 15.1543 12.0503 15.1543 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    