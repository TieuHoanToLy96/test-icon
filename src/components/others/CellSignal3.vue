<script>
export default {
  name: 'cell-signal-3',
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
<path d="M20 20H4.73099C4.58618 20.0002 4.44456 19.9575 4.32409 19.8771C4.20362 19.7967 4.10974 19.6824 4.05436 19.5486C3.99897 19.4148 3.98457 19.2675 4.013 19.1255C4.04142 18.9835 4.11137 18.8532 4.21399 18.751L18.751 4.21399C18.8532 4.11137 18.9835 4.04142 19.1255 4.013C19.2675 3.98457 19.4148 3.99897 19.5486 4.05436C19.6824 4.10974 19.7967 4.20362 19.8771 4.32409C19.9575 4.44456 20.0002 4.58618 20 4.73099V20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    