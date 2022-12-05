<script>
export default {
  name: 'grain-svg',
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
<path d="M4.5 10.5C5.05228 10.5 5.5 10.0523 5.5 9.5C5.5 8.94772 5.05228 8.5 4.5 8.5C3.94772 8.5 3.5 8.94772 3.5 9.5C3.5 10.0523 3.94772 10.5 4.5 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 5.5C10.0523 5.5 10.5 5.05228 10.5 4.5C10.5 3.94772 10.0523 3.5 9.5 3.5C8.94772 3.5 8.5 3.94772 8.5 4.5C8.5 5.05228 8.94772 5.5 9.5 5.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 15.5C10.0523 15.5 10.5 15.0523 10.5 14.5C10.5 13.9477 10.0523 13.5 9.5 13.5C8.94772 13.5 8.5 13.9477 8.5 14.5C8.5 15.0523 8.94772 15.5 9.5 15.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 20.5C5.05228 20.5 5.5 20.0523 5.5 19.5C5.5 18.9477 5.05228 18.5 4.5 18.5C3.94772 18.5 3.5 18.9477 3.5 19.5C3.5 20.0523 3.94772 20.5 4.5 20.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 10.5C15.0523 10.5 15.5 10.0523 15.5 9.5C15.5 8.94772 15.0523 8.5 14.5 8.5C13.9477 8.5 13.5 8.94772 13.5 9.5C13.5 10.0523 13.9477 10.5 14.5 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 5.5C20.0523 5.5 20.5 5.05228 20.5 4.5C20.5 3.94772 20.0523 3.5 19.5 3.5C18.9477 3.5 18.5 3.94772 18.5 4.5C18.5 5.05228 18.9477 5.5 19.5 5.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 20.5C15.0523 20.5 15.5 20.0523 15.5 19.5C15.5 18.9477 15.0523 18.5 14.5 18.5C13.9477 18.5 13.5 18.9477 13.5 19.5C13.5 20.0523 13.9477 20.5 14.5 20.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 15.5C20.0523 15.5 20.5 15.0523 20.5 14.5C20.5 13.9477 20.0523 13.5 19.5 13.5C18.9477 13.5 18.5 13.9477 18.5 14.5C18.5 15.0523 18.9477 15.5 19.5 15.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    