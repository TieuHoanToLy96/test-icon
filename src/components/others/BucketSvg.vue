<script>
export default {
  name: 'bucket-svg',
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
<path d="M19 9L17 18C16.9065 18.5732 16.6552 19.0872 16.2897 19.4527C15.9243 19.8181 15.4679 20.0118 15 20H9C8.53211 20.0118 8.07572 19.8181 7.71028 19.4527C7.34485 19.0872 7.0935 18.5732 7 18L5 9H19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    