<script>
export default {
  name: 'rss-svg',
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
<path d="M5.20532 13.5C6.79662 13.5 8.32274 14.1321 9.44796 15.2574C10.5732 16.3826 11.2053 17.9087 11.2053 19.5M5.20532 9C7.9901 9 10.6608 10.1062 12.6299 12.0754C14.5991 14.0445 15.7053 16.7152 15.7053 19.5M5.20532 4.5C7.17515 4.5 9.12569 4.88799 10.9456 5.64181C12.7655 6.39563 14.419 7.50052 15.8119 8.8934C17.2048 10.2863 18.3097 11.9399 19.0635 13.7597C19.8173 15.5796 20.2053 17.5302 20.2053 19.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.58001 20.0625C6.0973 20.0625 6.51665 19.6428 6.51665 19.125C6.51665 18.6072 6.0973 18.1875 5.58001 18.1875C5.06272 18.1875 4.64337 18.6072 4.64337 19.125C4.64337 19.6428 5.06272 20.0625 5.58001 20.0625Z" fill="currentColor"/>
</svg>

</template>
    