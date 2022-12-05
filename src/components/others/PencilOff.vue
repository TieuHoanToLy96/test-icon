<script>
export default {
  name: 'pencil-off',
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
<path d="M10.003 9.99681L4 15.9998V19.9998H8L14.006 13.9938M15.996 12.0038L18.5 9.49981C18.7626 9.23717 18.971 8.92537 19.1131 8.58221C19.2553 8.23905 19.3284 7.87125 19.3284 7.49981C19.3284 7.12838 19.2553 6.76058 19.1131 6.41742C18.971 6.07426 18.7626 5.76246 18.5 5.49981C18.2374 5.23717 17.9256 5.02883 17.5824 4.88669C17.2392 4.74455 16.8714 4.67139 16.5 4.67139C16.1286 4.67139 15.7608 4.74455 15.4176 4.88669C15.0744 5.02883 14.7626 5.23717 14.5 5.49981L12 7.99981" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 6.5L17.5 10.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    