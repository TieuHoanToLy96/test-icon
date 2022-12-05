<script>
export default {
  name: 'cell-signal-none',
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
<path d="M19.4555 4.06067V19.5C19.4555 19.6989 19.3764 19.8897 19.2358 20.0303C19.0951 20.171 18.9044 20.25 18.7055 20.25H3.26611C3.11778 20.25 2.97277 20.206 2.84944 20.1236C2.7261 20.0412 2.62997 19.9241 2.5732 19.787C2.51644 19.65 2.50159 19.4992 2.53052 19.3537C2.55946 19.2082 2.63089 19.0746 2.73578 18.9697L18.1751 3.53034C18.28 3.42545 18.4137 3.35402 18.5591 3.32508C18.7046 3.29614 18.8554 3.31099 18.9925 3.36776C19.1295 3.42453 19.2466 3.52065 19.3291 3.64399C19.4115 3.76733 19.4555 3.91233 19.4555 4.06067Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    