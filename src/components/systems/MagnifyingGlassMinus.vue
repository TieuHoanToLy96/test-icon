<script>
export default {
  name: 'magnifying-glass-minus',
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
<path d="M8.58032 10.875H14.5803M17.1485 16.4435L21.7048 20.9998M19.4553 10.8747C19.4553 15.224 15.9296 18.7497 11.5803 18.7497C7.23108 18.7497 3.70532 15.224 3.70532 10.8747C3.70532 6.52548 7.23108 2.99973 11.5803 2.99973C15.9296 2.99973 19.4553 6.52548 19.4553 10.8747Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    