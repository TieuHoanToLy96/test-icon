<script>
export default {
  name: 'bookmarks-svg',
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
<path d="M8.60303 6V3.75C8.60303 3.55109 8.68205 3.36032 8.8227 3.21967C8.96335 3.07902 9.15412 3 9.35303 3H18.353C18.5519 3 18.7427 3.07902 18.8834 3.21967C19.024 3.36032 19.103 3.55109 19.103 3.75V18L16.103 15.8574M16.103 21L10.8523 17.25L5.60303 21V6.75C5.60303 6.55109 5.68205 6.36032 5.8227 6.21967C5.96335 6.07902 6.15411 6 6.35303 6H15.353C15.5519 6 15.7427 6.07902 15.8834 6.21967C16.024 6.36032 16.103 6.55109 16.103 6.75V21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    