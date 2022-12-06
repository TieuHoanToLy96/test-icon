<script>
export default {
  name: 'fork-knife',
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
<path d="M7.99265 3V6.75M7.99265 10.875V21M7.99265 10.875C8.88775 10.875 9.7462 10.5194 10.3791 9.88649C11.0121 9.25355 11.3676 8.39511 11.3676 7.5L10.6176 3M7.99265 10.875C7.09754 10.875 6.2391 10.5194 5.60616 9.88649C4.97322 9.25355 4.61765 8.39511 4.61765 7.5L5.36765 3M19.2426 15H13.9926C13.9926 15 15.1176 4.5 19.2426 3V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    