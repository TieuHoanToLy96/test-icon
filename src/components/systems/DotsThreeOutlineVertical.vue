<script>
export default {
  name: 'dots-three-outline-vertical',
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
<path d="M12.5291 14.25C13.7717 14.25 14.7791 13.2426 14.7791 12C14.7791 10.7574 13.7717 9.75 12.5291 9.75C11.2864 9.75 10.2791 10.7574 10.2791 12C10.2791 13.2426 11.2864 14.25 12.5291 14.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5291 6.75C13.7717 6.75 14.7791 5.74264 14.7791 4.5C14.7791 3.25736 13.7717 2.25 12.5291 2.25C11.2864 2.25 10.2791 3.25736 10.2791 4.5C10.2791 5.74264 11.2864 6.75 12.5291 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5291 21.75C13.7717 21.75 14.7791 20.7426 14.7791 19.5C14.7791 18.2574 13.7717 17.25 12.5291 17.25C11.2864 17.25 10.2791 18.2574 10.2791 19.5C10.2791 20.7426 11.2864 21.75 12.5291 21.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    