<script>
export default {
  name: 'template-off',
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
<path d="M8 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8H12M8 8H5C4.73478 8 4.48043 7.89464 4.29289 7.70711C4.10536 7.51957 4 7.26522 4 7V5C4 4.729 4.108 4.483 4.283 4.303" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12H5C4.44772 12 4 12.4477 4 13V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V13C10 12.4477 9.55228 12 9 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 16H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 20H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    