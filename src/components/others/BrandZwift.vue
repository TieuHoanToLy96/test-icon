<script>
export default {
  name: 'brand-zwift',
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
<path d="M5.5 4C4.035 4 3 5.101 3 6.5C3 7.899 4.035 9 5.5 9H8L3.363 16.19C3.12788 16.5711 3.00245 17.0097 3.00051 17.4575C2.99857 17.9052 3.1202 18.3449 3.352 18.728C3.825 19.515 4.702 20 5.652 20H16.5C17.965 20 19 18.899 19 17.5C19 16.101 17.965 15 16.5 15H14L21 4H5.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    