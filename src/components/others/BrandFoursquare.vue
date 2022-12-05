<script>
export default {
  name: 'brand-foursquare',
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
<path d="M7 3H17C17.644 3 18.11 3.696 17.978 4.33L15.994 14.189C15.9472 14.418 15.8227 14.6239 15.6416 14.7717C15.4604 14.9195 15.2338 15.0001 15 15H12.746C12.438 15 12.146 15.141 11.953 15.382L7.809 20.632C7.21 21.384 6 20.963 6 20V4C6 3.436 6.44 3 7 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    