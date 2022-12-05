<script>
export default {
  name: 'monitor-play',
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
<path d="M15.4119 21H9.41187M15.4119 11.25L10.9119 8.25V14.25L15.4119 11.25ZM19.9119 18H4.91187C4.08344 18 3.41187 17.3284 3.41187 16.5V6C3.41187 5.17157 4.08344 4.5 4.91187 4.5H19.9119C20.7403 4.5 21.4119 5.17157 21.4119 6V16.5C21.4119 17.3284 20.7403 18 19.9119 18Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    