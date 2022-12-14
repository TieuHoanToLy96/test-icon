<script>
export default {
  name: 'brand-openvpn',
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
<path d="M15.6181 20.243L13.4251 14.641C14.0128 14.3239 14.4779 13.8197 14.7467 13.2084C15.0156 12.5971 15.0727 11.9136 14.9092 11.2661C14.7457 10.6186 14.3708 10.0442 13.8439 9.63389C13.3171 9.22355 12.6684 9.00073 12.0006 9.00073C11.3327 9.00073 10.684 9.22355 10.1572 9.63389C9.6303 10.0442 9.25542 10.6186 9.09189 11.2661C8.92836 11.9136 8.98555 12.5971 9.25438 13.2084C9.52322 13.8197 9.98834 14.3239 10.5761 14.641L8.38306 20.244" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    