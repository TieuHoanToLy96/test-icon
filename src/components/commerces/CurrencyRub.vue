<script>
export default {
  name: 'currency-rub',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6618 16.5H13.9118M8.6618 20.25V3.75H14.2868C15.5797 3.75 16.8197 4.26361 17.7339 5.17785C18.6482 6.09209 19.1618 7.33207 19.1618 8.625C19.1618 9.91793 18.6482 11.1579 17.7339 12.0721C16.8197 12.9864 15.5797 13.5 14.2868 13.5H5.6618" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    