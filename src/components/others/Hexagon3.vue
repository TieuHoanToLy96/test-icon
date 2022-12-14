<script>
export default {
  name: 'hexagon-3',
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
<path d="M10 9C10 8.73478 10.1054 8.48043 10.2929 8.29289C10.4804 8.10536 10.7348 8 11 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9V11C14 11.2652 13.8946 11.5196 13.7071 11.7071C13.5196 11.8946 13.2652 12 13 12H11H13C13.2652 12 13.5196 12.1054 13.7071 12.2929C13.8946 12.4804 14 12.7348 14 13V15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H11C10.7348 16 10.4804 15.8946 10.2929 15.7071C10.1054 15.5196 10 15.2652 10 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    