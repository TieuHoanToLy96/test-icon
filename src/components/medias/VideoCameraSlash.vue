<script>
export default {
  name: 'video-camera-slash',
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
<path d="M17.0293 13.3077L21.5293 15.9231V8.07692L17.0293 10.6923V13.3077ZM17.0293 13.3077V9.05769C17.0293 8.36405 16.7584 7.69882 16.2761 7.20834C15.7939 6.71786 15.1399 6.44231 14.4579 6.44231H11.1538M5.04878 3.5L20.2436 20.5M17.0293 16.9038C17.0293 17.0773 16.9616 17.2436 16.841 17.3662C16.7205 17.4888 16.5569 17.5577 16.3864 17.5577H6.10073C5.41874 17.5577 4.76469 17.2821 4.28245 16.7917C3.80021 16.3012 3.5293 15.636 3.5293 14.9423V7.09615C3.5293 6.92274 3.59703 6.75643 3.71759 6.63381C3.83814 6.5112 4.00166 6.44231 4.17215 6.44231H7.67865" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    