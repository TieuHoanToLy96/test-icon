<script>
export default {
  name: 'knife-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0864 8.48354L19.1029 13.5C19.1029 13.5 12.3529 22.5 2.60291 20.25L18.9021 3.5492C19.0762 3.37501 19.2829 3.23682 19.5104 3.14252C19.7379 3.04822 19.9817 2.99967 20.228 2.99963C20.4743 2.9996 20.7182 3.04808 20.9457 3.14231C21.1732 3.23654 21.38 3.37467 21.5541 3.54881C21.7283 3.72295 21.8664 3.9297 21.9606 4.15723C22.0549 4.38477 22.1033 4.62864 22.1033 4.87491C22.1033 5.12119 22.0547 5.36504 21.9604 5.59255C21.8661 5.82006 21.7279 6.02676 21.5537 6.20085L16.8319 11.2301" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    