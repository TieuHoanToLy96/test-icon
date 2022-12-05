<script>
export default {
  name: 'tir-svg',
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
<path d="M5 19C6.10457 19 7 18.1046 7 17C7 15.8954 6.10457 15 5 15C3.89543 15 3 15.8954 3 17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 18H15M19 18H21V12C21 10.1435 20.4732 8.36301 19.5355 7.05025C18.5979 5.7375 17.3261 5 16 5H15L16.5 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V5H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 17V12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    