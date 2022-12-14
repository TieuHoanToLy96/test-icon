<script>
export default {
  name: 'brand-tinder',
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
<path d="M18.918 8.174C21.478 13.156 19.419 19.83 13.538 20.8C5.83603 22.487 0.698029 13.084 6.48403 7.571C6.79303 7.266 7.64503 6.476 8.00003 6.222C8.00003 6.75 8.27003 9.697 9.00003 9.389C12 9.389 13 5.167 12.587 2C15.287 3.411 17.574 5.376 18.918 8.174V8.174Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    