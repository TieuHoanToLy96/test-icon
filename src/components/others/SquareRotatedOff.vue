<script>
export default {
  name: 'square-rotated-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9638 16.9518L13.5018 20.4128C12.7198 21.1958 11.2798 21.1958 10.4978 20.4128L3.58676 13.5028C2.80376 12.7198 2.80376 11.2798 3.58676 10.4978L7.04176 7.04176M9.04476 5.03876L10.4978 3.58676C11.2798 2.80376 12.7198 2.80376 13.5018 3.58676L20.4128 10.4968C21.1958 11.2798 21.1958 12.7198 20.4128 13.5018L18.9648 14.9518" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    