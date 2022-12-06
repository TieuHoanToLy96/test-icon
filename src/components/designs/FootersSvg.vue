<script>
export default {
  name: 'footers-svg',
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
<path d="M20.1818 14.6667H3.81818C3.36631 14.6667 3 15.0078 3 15.4286V19.2381C3 19.6589 3.36631 20 3.81818 20H20.1818C20.6337 20 21 19.6589 21 19.2381V15.4286C21 15.0078 20.6337 14.6667 20.1818 14.6667Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 4L21 4M3.00063 7.5H21M3.00063 11H16.0909" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    