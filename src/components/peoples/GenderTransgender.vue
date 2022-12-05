<script>
export default {
  name: 'gender-transgender',
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
<path d="M13.3015 10.7574L20.3088 3.75M20.3088 3.75H15.8088M20.3088 3.75V8.25M13.5588 6L18.0588 10.5M15.0588 15C15.0588 18.3137 12.3725 21 9.05884 21C5.74513 21 3.05884 18.3137 3.05884 15C3.05884 11.6863 5.74513 9 9.05884 9C12.3725 9 15.0588 11.6863 15.0588 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    