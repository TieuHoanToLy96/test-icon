<script>
export default {
  name: 'eye-svg',
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
<path d="M12.8236 5.24927C5.32361 5.24927 2.32361 12 2.32361 12C2.32361 12 5.32361 18.7493 12.8236 18.7493C20.3236 18.7493 23.3236 12 23.3236 12C23.3236 12 20.3236 5.24927 12.8236 5.24927Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.8236 15.7501C14.8947 15.7501 16.5736 14.0711 16.5736 12.0001C16.5736 9.92899 14.8947 8.25006 12.8236 8.25006C10.7525 8.25006 9.07361 9.92899 9.07361 12.0001C9.07361 14.0711 10.7525 15.7501 12.8236 15.7501Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    