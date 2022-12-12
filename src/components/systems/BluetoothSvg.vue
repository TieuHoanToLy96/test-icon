<script>
export default {
  name: 'bluetooth-svg',
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
<path d="M11.8384 12.0003L17.8384 7.50031L11.8384 3.00031V12.0003ZM11.8384 12.0003L17.8384 16.5003L11.8384 21.0003V12.0003ZM11.8384 12.0003L5.83838 7.50026M11.8384 12.0003L5.83838 16.5003" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    