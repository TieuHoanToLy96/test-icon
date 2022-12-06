<script>
export default {
  name: 'linkedin-logo',
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
<path d="M11.6029 10.5001V16.5001M8.60291 10.5001V16.5001M11.6029 13.1251C11.6029 12.4289 11.8795 11.7612 12.3718 11.2689C12.864 10.7767 13.5317 10.5001 14.2279 10.5001C14.9241 10.5001 15.5918 10.7767 16.0841 11.2689C16.5763 11.7612 16.8529 12.4289 16.8529 13.1251V16.5001M4.47791 3.375H20.2279C20.6421 3.375 20.9779 3.71079 20.9779 4.125V19.875C20.9779 20.2892 20.6421 20.625 20.2279 20.625H4.47791C4.06369 20.625 3.72791 20.2892 3.72791 19.875V4.125C3.72791 3.71079 4.06369 3.375 4.47791 3.375Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.60204 8.4375C9.11934 8.4375 9.53868 8.01777 9.53868 7.5C9.53868 6.98223 9.11934 6.5625 8.60204 6.5625C8.08475 6.5625 7.66541 6.98223 7.66541 7.5C7.66541 8.01777 8.08475 8.4375 8.60204 8.4375Z" fill="currentColor"/>
</svg>

</template>
    