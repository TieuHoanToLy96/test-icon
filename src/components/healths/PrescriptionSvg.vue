<script>
export default {
  name: 'prescription-svg',
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
<path d="M7.2793 12H11.7793C12.8733 12 13.9225 11.5654 14.6961 10.7918C15.4697 10.0182 15.9043 8.96902 15.9043 7.875C15.9043 6.78098 15.4697 5.73177 14.6961 4.95818C13.9225 4.1846 12.8733 3.75 11.7793 3.75H7.2793V18M11.0293 12L19.2793 20.25M19.2793 15L14.0293 20.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    