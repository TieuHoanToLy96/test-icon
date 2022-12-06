<script>
export default {
  name: 'cell-signal-low',
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
<path d="M8.14686 13.5V20.25M19.3969 4.06067V19.5C19.3969 19.6989 19.3178 19.8897 19.1772 20.0303C19.0365 20.171 18.8458 20.25 18.6469 20.25H3.20752C3.05918 20.25 2.91418 20.206 2.79084 20.1236C2.66751 20.0412 2.57138 19.9241 2.51461 19.787C2.45784 19.65 2.44299 19.4992 2.47193 19.3537C2.50087 19.2082 2.5723 19.0746 2.67719 18.9697L18.1165 3.53034C18.2214 3.42545 18.3551 3.35402 18.5005 3.32508C18.646 3.29614 18.7968 3.31099 18.9339 3.36776C19.0709 3.42453 19.1881 3.52065 19.2705 3.64399C19.3529 3.76733 19.3969 3.91233 19.3969 4.06067Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    