<script>
export default {
  name: 'wifi-none',
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
<path d="M12.411 19.6875C12.9283 19.6875 13.3476 19.2678 13.3476 18.75C13.3476 18.2322 12.9283 17.8125 12.411 17.8125C11.8937 17.8125 11.4744 18.2322 11.4744 18.75C11.4744 19.2678 11.8937 19.6875 12.411 19.6875Z" fill="currentColor"/>
</svg>

</template>
    