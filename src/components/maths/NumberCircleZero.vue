<script>
export default {
  name: 'number-circle-zero',
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
<path d="M12.6472 16.5C14.3041 16.5 15.6472 14.4853 15.6472 12C15.6472 9.51472 14.3041 7.5 12.6472 7.5C10.9904 7.5 9.64722 9.51472 9.64722 12C9.64722 14.4853 10.9904 16.5 12.6472 16.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6472 21C17.6178 21 21.6472 16.9706 21.6472 12C21.6472 7.02944 17.6178 3 12.6472 3C7.67665 3 3.64722 7.02944 3.64722 12C3.64722 16.9706 7.67665 21 12.6472 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    