<script>
export default {
  name: 'cloud-lock-open',
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
<path d="M19 17.9999C19.9283 17.9999 20.8185 17.6312 21.4749 16.9748C22.1313 16.3184 22.5 15.4282 22.5 14.4999C22.5 13.5717 22.1313 12.6814 21.4749 12.025C20.8185 11.3687 19.9283 10.9999 19 10.9999H18C18.397 9.23192 17.715 7.40692 16.212 6.21292C14.709 5.01992 12.612 4.63792 10.712 5.21292C8.81201 5.78792 7.39701 7.23192 7.00001 8.99992C4.80101 8.91192 2.84501 10.3259 2.33401 12.3729C1.82201 14.4199 2.89801 16.5269 4.90001 17.3999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15H9C8.44772 15 8 15.4477 8 16V19C8 19.5523 8.44772 20 9 20H15C15.5523 20 16 19.5523 16 19V16C16 15.4477 15.5523 15 15 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 14.9999V12.9999C9.99981 12.5589 10.1454 12.1302 10.4141 11.7804C10.6828 11.4307 11.0596 11.1797 11.4858 11.0663C11.912 10.9529 12.3637 10.9835 12.7707 11.1535C13.1776 11.3234 13.517 11.6231 13.736 12.0059" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    