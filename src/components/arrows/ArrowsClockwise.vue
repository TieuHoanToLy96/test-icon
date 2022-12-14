<script>
export default {
  name: 'arrows-clockwise',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5156 9.34838H21.0156M21.0156 9.34838V4.84838M21.0156 9.34838L17.8336 6.16637C17.0675 5.40029 16.158 4.7926 15.1571 4.37799C14.1562 3.96339 13.0834 3.75 12 3.75C10.9166 3.75 9.84377 3.96339 8.84283 4.37799C7.8419 4.7926 6.93242 5.40029 6.16634 6.16637M7.48431 14.6516H2.98431M2.98431 14.6516V19.1516M2.98431 14.6516L6.16634 17.8336C6.93242 18.5997 7.8419 19.2074 8.84283 19.622C9.84377 20.0366 10.9166 20.25 12 20.25C13.0834 20.25 14.1562 20.0366 15.1571 19.622C16.158 19.2074 17.0675 18.5997 17.8336 17.8336" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    