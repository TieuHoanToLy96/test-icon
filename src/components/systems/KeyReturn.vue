<script>
export default {
  name: 'key-return',
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
<path d="M17.2649 9.75V12.75H8.26489M8.26489 12.75L10.5149 10.5M8.26489 12.75L10.5149 15M4.51489 4.5H21.0149C21.4291 4.5 21.7649 4.83579 21.7649 5.25V18.75C21.7649 19.1642 21.4291 19.5 21.0149 19.5H4.51489C4.10068 19.5 3.76489 19.1642 3.76489 18.75V5.25C3.76489 4.83579 4.10068 4.5 4.51489 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    