<script>
export default {
  name: 'notification-svg',
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
<path d="M20.0884 12V19.5C20.0884 19.6989 20.0094 19.8897 19.8687 20.0303C19.7281 20.171 19.5373 20.25 19.3384 20.25H5.08838C4.88947 20.25 4.6987 20.171 4.55805 20.0303C4.4174 19.8897 4.33838 19.6989 4.33838 19.5V5.25C4.33838 5.05109 4.4174 4.86032 4.55805 4.71967C4.6987 4.57902 4.88947 4.5 5.08838 4.5H12.5884M21.5884 5.625C21.5884 7.07475 20.4131 8.25 18.9634 8.25C17.5136 8.25 16.3384 7.07475 16.3384 5.625C16.3384 4.17525 17.5136 3 18.9634 3C20.4131 3 21.5884 4.17525 21.5884 5.625Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    