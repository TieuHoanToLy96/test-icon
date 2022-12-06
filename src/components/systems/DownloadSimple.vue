<script>
export default {
  name: 'download-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.82739 10.3135L12.7649 14.25L16.7024 10.3135M12.7649 3.75V14.2472M21.0149 14.25V19.5C21.0149 19.6989 20.9359 19.8897 20.7952 20.0303C20.6546 20.171 20.4638 20.25 20.2649 20.25H5.26489C5.06598 20.25 4.87521 20.171 4.73456 20.0303C4.59391 19.8897 4.51489 19.6989 4.51489 19.5V14.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    