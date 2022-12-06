<script>
export default {
  name: 'planet-svg',
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
<path d="M18.0895 5.64924C20.6918 4.9411 22.6407 5.00414 23.2157 6C24.2512 7.7936 20.4379 11.9339 14.6984 15.2476C8.95887 18.5613 3.46661 19.7936 2.43108 18C1.85622 17.0043 2.77566 15.2854 4.68939 13.3862M21.0734 12C21.0734 16.5564 17.3797 20.25 12.8234 20.25C8.26704 20.25 4.57338 16.5564 4.57338 12C4.57338 7.44365 8.26704 3.75 12.8234 3.75C17.3797 3.75 21.0734 7.44365 21.0734 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    