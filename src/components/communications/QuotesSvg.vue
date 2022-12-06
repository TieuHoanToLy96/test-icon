<script>
export default {
  name: 'quotes-svg',
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
<path d="M10.1837 13.5H3.80872C3.6098 13.5 3.41904 13.421 3.27839 13.2803C3.13773 13.1397 3.05872 12.9489 3.05872 12.75V6.75C3.05872 6.55109 3.13773 6.36032 3.27839 6.21967C3.41904 6.07902 3.6098 6 3.80872 6H9.43372C9.63263 6 9.82339 6.07902 9.96405 6.21967C10.1047 6.36032 10.1837 6.55109 10.1837 6.75V15C10.1837 15.9946 9.78863 16.9484 9.08537 17.6517C8.38211 18.3549 7.42828 18.75 6.43372 18.75M21.0587 13.5H14.6837C14.4848 13.5 14.294 13.421 14.1534 13.2803C14.0127 13.1397 13.9337 12.9489 13.9337 12.75V6.75C13.9337 6.55109 14.0127 6.36032 14.1534 6.21967C14.294 6.07902 14.4848 6 14.6837 6H20.3087C20.5076 6 20.6984 6.07902 20.839 6.21967C20.9797 6.36032 21.0587 6.55109 21.0587 6.75V15C21.0587 15.9946 20.6636 16.9484 19.9604 17.6517C19.2571 18.3549 18.3033 18.75 17.3087 18.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    