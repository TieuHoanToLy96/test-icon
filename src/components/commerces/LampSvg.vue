<script>
export default {
  name: 'lamp-svg',
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
<path d="M12.4118 14.25V20.25M9.41179 20.25H15.4118M19.1618 14.25V18M6.90634 3.75H17.9172C18.064 3.75 18.2076 3.79307 18.3301 3.87387C18.4526 3.95467 18.5488 4.06965 18.6066 4.20456L22.4637 13.2046C22.5126 13.3186 22.5325 13.4431 22.5214 13.5667C22.5104 13.6903 22.4688 13.8093 22.4005 13.9129C22.3322 14.0165 22.2392 14.1015 22.1299 14.1604C22.0207 14.2192 21.8985 14.25 21.7744 14.25H3.04919C2.92508 14.25 2.80291 14.2192 2.69363 14.1604C2.58435 14.1015 2.49139 14.0165 2.42306 13.9129C2.35474 13.8093 2.3132 13.6903 2.30216 13.5667C2.29113 13.4431 2.31095 13.3186 2.35984 13.2046L6.21698 4.20456C6.2748 4.06965 6.37093 3.95467 6.49347 3.87387C6.61601 3.79307 6.75956 3.75 6.90634 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    