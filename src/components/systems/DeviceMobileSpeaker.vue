<script>
export default {
  name: 'device-mobile-speaker',
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
<path d="M9.41187 5.25H15.4119M18.4119 3.75V20.25C18.4119 21.0784 17.7403 21.75 16.9119 21.75H7.91187C7.08344 21.75 6.41187 21.0784 6.41187 20.25V3.75C6.41187 2.92157 7.08344 2.25 7.91187 2.25H16.9119C17.7403 2.25 18.4119 2.92157 18.4119 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    