<script>
export default {
  name: 'milkshake-svg',
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
<path d="M17 10C17 8.67392 16.4732 7.40215 15.5355 6.46447C14.5979 5.52678 13.3261 5 12 5C10.6739 5 9.40215 5.52678 8.46447 6.46447C7.52678 7.40215 7 8.67392 7 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10H7C6.44772 10 6 10.4477 6 11V12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12V11C18 10.4477 17.5523 10 17 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13L8.81 20.243C8.86417 20.4592 8.98905 20.6512 9.16479 20.7883C9.34054 20.9255 9.55707 21 9.78 21H14.22C14.4429 21 14.6595 20.9255 14.8352 20.7883C15.011 20.6512 15.1358 20.4592 15.19 20.243L17 13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    