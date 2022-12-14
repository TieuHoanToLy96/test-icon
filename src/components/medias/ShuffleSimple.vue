<script>
export default {
  name: 'shuffle-simple',
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
<path d="M16.0442 4.5H19.7942M19.7942 4.5V8.25M19.7942 4.5L14.4155 9.8787M19.7942 15.75V19.5M19.7942 19.5H16.0442M19.7942 19.5L4.79419 4.5M4.79419 19.5L10.1729 14.1213" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    