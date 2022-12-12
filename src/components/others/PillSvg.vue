<script>
export default {
  name: 'pill-svg',
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
<path d="M4.49998 12.5L12.5 4.50004C13.4282 3.57178 14.6872 3.05029 16 3.05029C17.3127 3.05029 18.5717 3.57178 19.5 4.50004C20.4282 5.4283 20.9497 6.68729 20.9497 8.00004C20.9497 9.3128 20.4282 10.5718 19.5 11.5L11.5 19.5C10.5717 20.4283 9.31273 20.9498 7.99998 20.9498C6.68722 20.9498 5.42824 20.4283 4.49998 19.5C3.57172 18.5718 3.05023 17.3128 3.05023 16C3.05023 14.6873 3.57172 13.4283 4.49998 12.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8.5L15.5 15.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    