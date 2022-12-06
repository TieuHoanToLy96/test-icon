<script>
export default {
  name: 'crosshair-svg',
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
<path d="M12.5293 1.875V5.625M2.4043 12H6.1543M12.5293 22.125V18.375M22.6543 12H18.9043M20.7793 12C20.7793 16.5564 17.0856 20.25 12.5293 20.25C7.97295 20.25 4.2793 16.5564 4.2793 12C4.2793 7.44365 7.97295 3.75 12.5293 3.75C17.0856 3.75 20.7793 7.44365 20.7793 12ZM15.5293 12C15.5293 13.6569 14.1862 15 12.5293 15C10.8724 15 9.5293 13.6569 9.5293 12C9.5293 10.3431 10.8724 9 12.5293 9C14.1862 9 15.5293 10.3431 15.5293 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    