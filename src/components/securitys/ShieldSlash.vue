<script>
export default {
  name: 'shield-slash',
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
<path d="M3.96143 2.25L21.6802 21.75M18.4022 18.1425C16.3802 20.4435 13.8224 21.4228 13.0511 21.6785C12.9019 21.7298 12.7397 21.7298 12.5905 21.6785C11.2557 21.236 4.5708 18.6264 4.5708 10.75V5.25C4.5708 5.05109 4.64982 4.86032 4.79047 4.71967C4.93112 4.57902 5.12189 4.5 5.3208 4.5H6.0059M10.0594 4.5H20.3208C20.5197 4.5 20.7105 4.57902 20.8511 4.71967C20.9918 4.86032 21.0708 5.05109 21.0708 5.25V10.75C21.0708 12.6329 20.6888 14.2147 20.0892 15.538" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    