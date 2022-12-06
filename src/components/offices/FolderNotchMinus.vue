<script>
export default {
  name: 'folder-notch-minus',
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
<path d="M12.1174 7.5H20.3674C20.5663 7.5 20.7571 7.57902 20.8978 7.71967C21.0384 7.86032 21.1174 8.05109 21.1174 8.25V18.75C21.1174 18.9489 21.0384 19.1397 20.8978 19.2803C20.7571 19.421 20.5663 19.5 20.3674 19.5H3.86743C3.6687 19.4994 3.47827 19.4202 3.33774 19.2797C3.19722 19.1392 3.11801 18.9487 3.11743 18.75V9.75M12.1174 7.5L9.31743 5.4C9.18761 5.30263 9.02971 5.25 8.86743 5.25H3.86743C3.66852 5.25 3.47775 5.32902 3.3371 5.46967C3.19645 5.61032 3.11743 5.80109 3.11743 6V9.75M12.1174 7.5L9.31743 9.6C9.18761 9.69737 9.02971 9.75 8.86743 9.75H3.11743M9.86716 13.875H14.3672" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    