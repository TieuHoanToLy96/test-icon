<script>
export default {
  name: 'first-aid',
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
<path d="M9.58826 15H4.33826C4.13934 15 3.94858 14.921 3.80793 14.7803C3.66727 14.6397 3.58826 14.4489 3.58826 14.25V9.75C3.58826 9.55109 3.66727 9.36032 3.80793 9.21967C3.94858 9.07902 4.13934 9 4.33826 9H9.58826V3.75C9.58826 3.55109 9.66728 3.36032 9.80793 3.21967C9.94858 3.07902 10.1393 3 10.3383 3H14.8383C15.0372 3 15.2279 3.07902 15.3686 3.21967C15.5092 3.36032 15.5883 3.55109 15.5883 3.75V9H20.8383C21.0372 9 21.2279 9.07902 21.3686 9.21967C21.5092 9.36032 21.5883 9.55109 21.5883 9.75V14.25C21.5883 14.4489 21.5092 14.6397 21.3686 14.7803C21.2279 14.921 21.0372 15 20.8383 15H15.5883V20.25C15.5883 20.4489 15.5092 20.6397 15.3686 20.7803C15.2279 20.921 15.0372 21 14.8383 21H10.3383C10.1393 21 9.94858 20.921 9.80793 20.7803C9.66728 20.6397 9.58826 20.4489 9.58826 20.25V15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    