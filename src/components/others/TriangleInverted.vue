<script>
export default {
  name: 'triangle-inverted',
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
<path d="M4.99995 4H18.9999C19.3263 4.00229 19.647 4.08438 19.9343 4.23913C20.2216 4.39387 20.4667 4.61656 20.6482 4.88776C20.8296 5.15897 20.942 5.47046 20.9754 5.79506C21.0088 6.11965 20.9623 6.4475 20.8399 6.75L13.7399 19C13.567 19.3126 13.3135 19.5732 13.0057 19.7546C12.6979 19.9361 12.3472 20.0318 11.9899 20.0318C11.6327 20.0318 11.2819 19.9361 10.9742 19.7546C10.6664 19.5732 10.4129 19.3126 10.2399 19L3.13995 6.75C3.01989 6.45442 2.97228 6.13442 3.0011 5.81669C3.02991 5.49897 3.13432 5.19275 3.3056 4.9236C3.47688 4.65444 3.71006 4.43017 3.98567 4.2695C4.26129 4.10883 4.57134 4.01643 4.88995 4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    