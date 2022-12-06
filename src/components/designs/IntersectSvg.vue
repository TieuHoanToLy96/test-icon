<script>
export default {
  name: 'intersect-svg',
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
<path d="M12.3096 9.23597L15.5878 12.5142M10.0594 11.4858L13.3377 14.7641M16.5736 9C16.5736 12.7279 13.5515 15.75 9.82361 15.75C6.09569 15.75 3.07361 12.7279 3.07361 9C3.07361 5.27208 6.09569 2.25 9.82361 2.25C13.5515 2.25 16.5736 5.27208 16.5736 9ZM22.5736 15C22.5736 18.7279 19.5515 21.75 15.8236 21.75C12.0957 21.75 9.07361 18.7279 9.07361 15C9.07361 11.2721 12.0957 8.25 15.8236 8.25C19.5515 8.25 22.5736 11.2721 22.5736 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    