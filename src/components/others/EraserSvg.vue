<script>
export default {
  name: 'eraser-svg',
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
<path d="M19.0001 19.9998H8.50006L4.29006 15.6998C4.10381 15.5125 3.99927 15.259 3.99927 14.9948C3.99927 14.7306 4.10381 14.4772 4.29006 14.2898L14.2901 4.28982C14.4774 4.10357 14.7309 3.99902 14.9951 3.99902C15.2592 3.99902 15.5127 4.10357 15.7001 4.28982L20.7001 9.28982C20.8863 9.47718 20.9909 9.73063 20.9909 9.99482C20.9909 10.259 20.8863 10.5125 20.7001 10.6998L11.5001 19.9998" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 13.3L11.7 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    