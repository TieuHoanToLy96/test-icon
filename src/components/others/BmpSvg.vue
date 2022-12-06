<script>
export default {
  name: 'bmp-svg',
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
<path d="M18 16V8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10C22 10.5304 21.7893 11.0391 21.4142 11.4142C21.0391 11.7893 20.5304 12 20 12H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 14C6 14.5304 5.78929 15.0391 5.41421 15.4142C5.03914 15.7893 4.53043 16 4 16H2V8H4C4.53043 8 5.03914 8.21071 5.41421 8.58579C5.78929 8.96086 6 9.46957 6 10C6 10.5304 5.78929 11.0391 5.41421 11.4142C5.03914 11.7893 4.53043 12 4 12H2H4C4.53043 12 5.03914 12.2107 5.41421 12.5858C5.78929 12.9609 6 13.4696 6 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16V8L12 14L15 8V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    