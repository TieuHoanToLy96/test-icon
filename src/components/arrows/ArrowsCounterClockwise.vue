<script>
export default {
  name: 'arrows-counter-clockwise',
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
<path d="M7.48431 9.34838H2.98431M2.98431 9.34838V4.84838M2.98431 9.34838L6.16634 6.16637C6.93242 5.40029 7.8419 4.7926 8.84283 4.37799C9.84377 3.96339 10.9166 3.75 12 3.75C13.0834 3.75 14.1562 3.96339 15.1571 4.37799C16.158 4.7926 17.0675 5.40029 17.8336 6.16637M16.5156 14.6516H21.0156M21.0156 14.6516V19.1516M21.0156 14.6516L17.8336 17.8336C17.0675 18.5997 16.158 19.2074 15.1571 19.622C14.1562 20.0366 13.0834 20.25 12 20.25C10.9166 20.25 9.84377 20.0366 8.84283 19.622C7.8419 19.2074 6.93242 18.5997 6.16634 17.8336" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    