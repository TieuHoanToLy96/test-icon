<script>
export default {
  name: 'home-link',
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
<path d="M20.085 11.085L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.3785 13 13.7492 13.1074 14.0691 13.3098C14.3889 13.5121 14.6448 13.801 14.807 14.143" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 22C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20C20.4477 20 20 20.4477 20 21C20 21.5523 20.4477 22 21 22Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15C20.4477 15 20 15.4477 20 16C20 16.5523 20.4477 17 21 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16L16 19L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    