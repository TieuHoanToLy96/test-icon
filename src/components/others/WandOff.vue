<script>
export default {
  name: 'wand-off',
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
<path d="M10.5 10.5L3 18L6 21L13.5 13.5M15.5 11.5L21 6L18 3L12.5 8.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6L18 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.43311 4.395C8.78311 4.035 9.00011 3.543 9.00011 3C9.00011 3.53043 9.21082 4.03914 9.58589 4.41421C9.96097 4.78929 10.4697 5 11.0001 5C10.4461 5 9.94511 5.225 9.58311 5.589" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.418 14.41C18.778 14.05 19 13.55 19 13C19 13.5304 19.2107 14.0391 19.5858 14.4142C19.9608 14.7893 20.4695 15 21 15C20.445 15 19.944 15.226 19.581 15.59" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    