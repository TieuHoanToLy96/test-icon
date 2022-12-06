<script>
export default {
  name: 'truck-off',
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
<path d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5851 15.5859C15.3992 15.7715 15.2517 15.9918 15.151 16.2344C15.0502 16.477 14.9983 16.737 14.998 16.9997C14.9976 17.5301 15.2078 18.039 15.5826 18.4144C15.9574 18.7899 16.4659 19.001 16.9963 19.0015C17.5268 19.002 18.0357 18.7917 18.4111 18.4169" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17H3V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H5M8.96 5H13V9M13 13V17M9 17H15M21 17V11H15M13 6H18L21 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    