<script>
export default {
  name: 'arrow-arc-left',
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
<path d="M8.63605 13.886H2.63605M2.63605 13.886V7.88605M2.63605 13.886L5.63602 10.886C6.8947 9.62735 8.49834 8.77018 10.2442 8.42292C11.99 8.07565 13.7996 8.25388 15.4441 8.93507C17.0887 9.61626 18.4943 10.7698 19.4832 12.2499C20.4721 13.7299 21 15.47 21 17.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    