<script>
export default {
  name: 'brand-kickstarter',
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
<path d="M11 9L13.975 4.35C14.59 3.45 15.38 3 16.352 3C17.142 3 17.826 3.286 18.406 3.858C18.982 4.432 19.272 5.114 19.272 5.912C19.272 6.5 19.119 7.021 18.812 7.471L16 11.5L19.465 16.412C19.821 16.872 20 17.41 20 18.025C20.006 18.4132 19.9346 18.7987 19.7898 19.1589C19.6451 19.5191 19.4299 19.8469 19.157 20.123C18.596 20.707 17.915 21 17.117 21C16.241 21 15.572 20.71 15.112 20.13L11 14.433V17.5C11 18.376 10.687 19.19 10.389 19.675C9.846 20.558 9.039 21 8 21C7.056 21 6.247 20.673 5.729 20.026C5.243 19.426 5 18.634 5 17.646V6.275C5 5.341 5.247 4.569 5.74 3.962C6.252 3.321 7.087 3 8 3C8.868 3 9.821 3.321 10.4 3.962C10.723 4.318 10.915 4.676 11 5.042C11.052 5.266 11 5.685 11 6.302V9V9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    