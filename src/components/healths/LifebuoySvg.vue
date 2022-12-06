<script>
export default {
  name: 'lifebuoy-svg',
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
<path d="M9.76009 9.34835L6.04778 5.63604M15.0634 9.34835L18.7757 5.63604M15.0634 14.6517L18.7757 18.364M9.76009 14.6517L6.04778 18.364M21.4117 12C21.4117 16.9706 17.3823 21 12.4117 21C7.44118 21 3.41174 16.9706 3.41174 12C3.41174 7.02944 7.44118 3 12.4117 3C17.3823 3 21.4117 7.02944 21.4117 12ZM16.1617 12C16.1617 14.0711 14.4828 15.75 12.4117 15.75C10.3407 15.75 8.66174 14.0711 8.66174 12C8.66174 9.92893 10.3407 8.25 12.4117 8.25C14.4828 8.25 16.1617 9.92893 16.1617 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    