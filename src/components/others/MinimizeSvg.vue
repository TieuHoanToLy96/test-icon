<script>
export default {
  name: 'minimize-svg',
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
<path d="M15 19V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5V7C15 7.53043 15.2107 8.03914 15.5858 8.41421C15.9609 8.78929 16.4696 9 17 9H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15H7C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 9H7C7.53043 9 8.03914 8.78929 8.41421 8.41421C8.78929 8.03914 9 7.53043 9 7V5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    