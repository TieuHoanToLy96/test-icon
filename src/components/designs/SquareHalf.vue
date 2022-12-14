<script>
export default {
  name: 'square-half',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V21M13.2851 3L21 10.7149M12 7.71491L21 16.7149M12 13.7149L19.2851 21M3.85714 3H20.1429C20.6162 3 21 3.38376 21 3.85714V20.1429C21 20.6162 20.6162 21 20.1429 21H3.85714C3.38376 21 3 20.6162 3 20.1429V3.85714C3 3.38376 3.38376 3 3.85714 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    