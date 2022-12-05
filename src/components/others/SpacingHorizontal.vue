<script>
export default {
  name: 'spacing-horizontal',
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
<path d="M20 20H18C17.4696 20 16.9609 19.7893 16.5858 19.4142C16.2107 19.0391 16 18.5304 16 18V6C16 5.46957 16.2107 4.96086 16.5858 4.58579C16.9609 4.21071 17.4696 4 18 4H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20H6C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18V6C8 5.46957 7.78929 4.96086 7.41421 4.58579C7.03914 4.21071 6.53043 4 6 4H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    