<script>
export default {
  name: 'brand-drupal',
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
<path d="M12 2C12 6.308 5 8 5 14.005C5 15.8615 5.7375 17.642 7.05025 18.9547C8.36301 20.2675 10.1435 21.005 12 21.005C13.8565 21.005 15.637 20.2675 16.9497 18.9547C18.2625 17.642 19 15.8615 19 14.005C19 8 12 6.308 12 2Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.33C11.344 12.0188 10.6732 12.6933 9.988 13.353C8.992 14.31 8 15.32 8 17C8 19.17 9.79 20.997 12 20.997C14.21 20.997 16 19.17 16 17C16 15.324 15.011 14.315 14.017 13.358C13.597 12.954 11.758 11.001 8.5 7.5L12 11.33V11.33Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    