<script>
export default {
  name: 'bookmarks-simple',
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
<path d="M8.66223 3H18.4122C18.6111 3 18.8019 3.07902 18.9426 3.21967C19.0832 3.36032 19.1622 3.55109 19.1622 3.75V18M16.1622 21L10.9115 17.25L5.66223 21V6.75C5.66223 6.55109 5.74125 6.36032 5.8819 6.21967C6.02255 6.07902 6.21332 6 6.41223 6H15.4122C15.6111 6 15.8019 6.07902 15.9426 6.21967C16.0832 6.36032 16.1622 6.55109 16.1622 6.75V21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    