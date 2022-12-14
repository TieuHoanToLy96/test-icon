<script>
export default {
  name: 'envelope-simple-open',
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
<path d="M3.00012 9V18.75C3.00012 18.9489 3.07914 19.1397 3.21979 19.2803C3.36044 19.421 3.55121 19.5 3.75012 19.5H20.2501C20.449 19.5 20.6398 19.421 20.7805 19.2803C20.9211 19.1397 21.0001 18.9489 21.0001 18.75V9M3.00012 9L12.0001 3L21.0001 9M3.00012 9L10.3637 14.25H13.6365L21.0001 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    