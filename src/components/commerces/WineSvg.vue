<script>
export default {
  name: 'wine-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2353 16.5V21.75M12.2353 16.5C13.6783 16.5 15.0907 16.0839 16.3032 15.3016C17.5157 14.5192 18.4769 13.4039 19.0716 12.0891C19.2934 11.5977 19.3313 11.043 19.1782 10.5261L16.7353 2.25H7.73529L5.29235 10.5261C5.13932 11.043 5.17717 11.5978 5.399 12.0892C5.9937 13.4039 6.95491 14.5193 8.16742 15.3016C9.37993 16.0839 10.7923 16.5 12.2353 16.5ZM8.48529 21.75H15.9853M5.62446 9.40096C6.61807 8.87288 8.92919 8.09695 12.2353 9.75C15.7561 11.5104 18.1485 10.5161 19.023 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    