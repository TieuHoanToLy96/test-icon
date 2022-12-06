<script>
export default {
  name: 'diamonds-svg',
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
<path d="M10.831 20.4131L5.456 13.5031C4.848 12.7201 4.848 11.2801 5.456 10.4981L10.831 3.58711C10.9666 3.40486 11.1429 3.25683 11.3459 3.15485C11.5488 3.05287 11.7728 2.99976 12 2.99976C12.2272 2.99976 12.4512 3.05287 12.6541 3.15485C12.8571 3.25683 13.0334 3.40486 13.169 3.58711L18.544 10.4971C19.152 11.2801 19.152 12.7201 18.544 13.5021L13.169 20.4131C13.0334 20.5954 12.8571 20.7434 12.6541 20.8454C12.4512 20.9473 12.2272 21.0005 12 21.0005C11.7728 21.0005 11.5488 20.9473 11.3459 20.8454C11.1429 20.7434 10.9666 20.5954 10.831 20.4131V20.4131Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    