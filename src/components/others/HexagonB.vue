<script>
export default {
  name: 'hexagon-b',
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
<path d="M19 6.8731C19.3062 7.0499 19.5601 7.30473 19.7358 7.61163C19.9115 7.91852 20.0026 8.2665 20 8.6201V15.1561C19.9999 15.5127 19.9045 15.8629 19.7235 16.1702C19.5426 16.4776 19.2828 16.731 18.971 16.9041L12.971 20.7371C12.674 20.9021 12.3398 20.9886 12 20.9886C11.6602 20.9886 11.326 20.9021 11.029 20.7371L5.029 16.9041C4.71736 16.731 4.45763 16.4778 4.27671 16.1707C4.0958 15.8635 4.00026 15.5136 4 15.1571V8.6201C4.00008 8.26346 4.09553 7.91332 4.27646 7.60598C4.45739 7.29863 4.71721 7.04526 5.029 6.8721L11.029 3.3001C11.3348 3.12987 11.679 3.04053 12.029 3.04053C12.379 3.04053 12.7232 3.12987 13.029 3.3001L19.029 6.8731H19V6.8731Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12H10H12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8H10V16Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    