<script>
export default {
  name: 'volume-3',
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
<path d="M6 15.0002H4C3.73478 15.0002 3.48043 14.8949 3.29289 14.7073C3.10536 14.5198 3 14.2654 3 14.0002V10.0002C3 9.735 3.10536 9.48065 3.29289 9.29311C3.48043 9.10557 3.73478 9.00022 4 9.00022H6L9.5 4.50022C9.5874 4.33045 9.73265 4.19754 9.90949 4.12551C10.0863 4.05348 10.2831 4.04708 10.4643 4.10746C10.6454 4.16784 10.799 4.29103 10.8972 4.45476C10.9955 4.61849 11.0319 4.81196 11 5.00022V19.0002C11.0319 19.1885 10.9955 19.3819 10.8972 19.5457C10.799 19.7094 10.6454 19.8326 10.4643 19.893C10.2831 19.9534 10.0863 19.947 9.90949 19.8749C9.73265 19.8029 9.5874 19.67 9.5 19.5002L6 15.0002Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 10L20 14M20 10L16 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    