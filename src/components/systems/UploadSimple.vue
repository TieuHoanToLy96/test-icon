<script>
export default {
  name: 'upload-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.65088 7.68647L12.5884 3.75L16.5259 7.68647M12.5884 14.25V3.75276M20.8384 14.25V19.5C20.8384 19.6989 20.7594 19.8897 20.6187 20.0303C20.4781 20.171 20.2873 20.25 20.0884 20.25H5.08838C4.88947 20.25 4.6987 20.171 4.55805 20.0303C4.4174 19.8897 4.33838 19.6989 4.33838 19.5V14.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    