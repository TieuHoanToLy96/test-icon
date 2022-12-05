<script>
export default {
  name: 'square-rotated-forbid-2',
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
<path d="M10.4999 20.3999L3.59991 13.4999C2.81891 12.7189 2.81891 11.2809 3.59991 10.4999L10.4999 3.59991C11.2809 2.81891 12.7189 2.81891 13.4999 3.59991L20.3999 10.4999C21.1809 11.2809 21.1809 12.7189 20.3999 13.4999L13.4999 20.3999C12.7189 21.1809 11.2809 21.1809 10.4999 20.3999V20.3999Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 9.5L14.5 14.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    