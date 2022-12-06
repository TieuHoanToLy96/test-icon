<script>
export default {
  name: 'currency-litecoin',
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
<path d="M18 19H9.80603C9.51946 19 9.23624 18.9385 8.97554 18.8195C8.71484 18.7005 8.48275 18.5269 8.29499 18.3104C8.10723 18.0939 7.96819 17.8396 7.88728 17.5647C7.80637 17.2898 7.78548 17.0007 7.82603 16.717L9.50003 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 9L5 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    