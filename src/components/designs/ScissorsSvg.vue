<script>
export default {
  name: 'scissors-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 12L7.79125 15.3928M21.75 5.84211L15.4064 10.1825M21.75 18.1579L7.7912 8.60714M8.25 7.125C8.25 8.57475 7.07475 9.75 5.625 9.75C4.17525 9.75 3 8.57475 3 7.125C3 5.67525 4.17525 4.5 5.625 4.5C7.07475 4.5 8.25 5.67525 8.25 7.125ZM8.25 16.875C8.25 18.3247 7.07475 19.5 5.625 19.5C4.17525 19.5 3 18.3247 3 16.875C3 15.4253 4.17525 14.25 5.625 14.25C7.07475 14.25 8.25 15.4253 8.25 16.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    