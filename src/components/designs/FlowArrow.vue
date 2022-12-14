<script>
export default {
  name: 'flow-arrow',
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
<path d="M6.80872 16.5C6.80872 17.9497 5.63346 19.125 4.18372 19.125C2.73397 19.125 1.55872 17.9497 1.55872 16.5C1.55872 15.0503 2.73397 13.875 4.18372 13.875C5.63346 13.875 6.80872 15.0503 6.80872 16.5ZM6.80872 16.5H7.55872C8.75219 16.5 9.89679 16.0259 10.7407 15.182C11.5846 14.3381 12.0587 13.1935 12.0587 12C12.0587 10.8065 12.5328 9.66193 13.3767 8.81802C14.2207 7.97411 15.3652 7.5 16.5587 7.5H22.5587M18.8087 3.75L22.5587 7.5M22.5587 7.5L18.8087 11.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    