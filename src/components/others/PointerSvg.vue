<script>
export default {
  name: 'pointer-svg',
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
<path d="M6 6L10.153 17.793C10.1829 17.8553 10.2299 17.9078 10.2885 17.9445C10.3471 17.9811 10.4149 18.0004 10.484 18C10.5533 18.0004 10.6212 17.9812 10.68 17.9446C10.7387 17.9079 10.7859 17.8554 10.816 17.793L13 13L17.787 11.006C17.8499 10.9785 17.9036 10.9334 17.9414 10.8761C17.9792 10.8187 17.9995 10.7517 18 10.683C17.9995 10.6143 17.9792 10.5473 17.9414 10.4899C17.9036 10.4326 17.8499 10.3875 17.787 10.36L6 6V6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 13.5L18 18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    