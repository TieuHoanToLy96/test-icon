<script>
export default {
  name: 'signal-3g',
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
<path d="M5 8H8C8.53043 8 9.03914 8.21071 9.41421 8.58579C9.78929 8.96086 10 9.46957 10 10C10 10.5304 9.78929 11.0391 9.41421 11.4142C9.03914 11.7893 8.53043 12 8 12H5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8H16C15.4696 8 14.9609 8.21071 14.5858 8.58579C14.2107 8.96086 14 9.46957 14 10V14C14 14.5304 14.2107 15.0391 14.5858 15.4142C14.9609 15.7893 15.4696 16 16 16H19V12H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12C8.53043 12 9.03914 12.2107 9.41421 12.5858C9.78929 12.9609 10 13.4696 10 14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16H5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    