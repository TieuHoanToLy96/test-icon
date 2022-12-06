<script>
export default {
  name: 'mouse-svg',
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
<path d="M5.34546 10.5H19.5955M12.4705 10.5L12.4705 3M10.5955 3H14.3455C17.245 3 19.5955 5.3505 19.5955 8.25V15.75C19.5955 18.6495 17.245 21 14.3455 21H10.5955C7.69596 21 5.34546 18.6495 5.34546 15.75V8.25C5.34546 5.3505 7.69596 3 10.5955 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    