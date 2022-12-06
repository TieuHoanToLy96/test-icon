<script>
export default {
  name: 'battery-empty',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6619 9V15M20.6619 6.75V17.25C20.6619 18.0784 19.9903 18.75 19.1619 18.75H4.91187C4.08344 18.75 3.41187 18.0784 3.41187 17.25V6.75C3.41187 5.92157 4.08344 5.25 4.91187 5.25H19.1619C19.9903 5.25 20.6619 5.92157 20.6619 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    