<script>
export default {
  name: 'road-sign',
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
<path d="M10.5 20.3999L3.60003 13.4999C2.81903 12.7189 2.81903 11.2809 3.60003 10.4999L10.5 3.59991C11.281 2.81891 12.719 2.81891 13.5 3.59991L20.4 10.4999C21.181 11.2809 21.181 12.7189 20.4 13.4999L13.5 20.3999C12.719 21.1809 11.281 21.1809 10.5 20.3999V20.3999Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14V12C9 11.41 9.414 11 10 11H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 9L15 11L13 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    