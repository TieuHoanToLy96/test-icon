<script>
export default {
  name: 'house-line',
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
<path d="M20.6017 20.25V10.8318C20.6017 10.7273 20.5798 10.6239 20.5376 10.5284C20.4953 10.4328 20.4335 10.3471 20.3562 10.2768L12.8557 3.4579C12.7176 3.33239 12.5377 3.26284 12.3511 3.26285C12.1646 3.26285 11.9847 3.33241 11.8466 3.45794L4.34713 10.2768C4.26982 10.3471 4.20805 10.4328 4.16579 10.5283C4.12352 10.6239 4.10168 10.7272 4.10168 10.8317V20.25M1.85168 20.25H22.8517M14.6011 20.2492V14.9992C14.6011 14.8003 14.5221 14.6095 14.3815 14.4689C14.2408 14.3282 14.05 14.2492 13.8511 14.2492H10.8511C10.6522 14.2492 10.4615 14.3282 10.3208 14.4689C10.1802 14.6095 10.1011 14.8003 10.1011 14.9992V20.2492" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    