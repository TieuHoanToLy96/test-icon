<script>
export default {
  name: 'aperture-svg',
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
<path d="M12.2942 21C17.2648 21 21.2942 16.9706 21.2942 12C21.2942 7.02944 17.2648 3 12.2942 3M12.2942 21C7.32363 21 3.29419 16.9706 3.29419 12C3.29419 7.02944 7.32363 3 12.2942 3M12.2942 21L8.85571 11.3723M12.2942 3L15.7327 12.6277M4.49996 7.5L14.5571 9.33606M4.49996 16.5L11.1186 8.70832M20.0884 16.5L10.0313 14.6639M20.0884 7.5L13.4698 15.2917" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    