<script>
export default {
  name: 'spinner-svg',
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
<path d="M12.5884 3V6M18.9523 5.63604L16.831 7.75736M21.5884 12H18.5884M18.9523 18.364L16.831 16.2426M12.5884 21V18M6.22442 18.364L8.34574 16.2426M3.58838 12H6.58838M6.22442 5.63604L8.34574 7.75736" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    