<script>
export default {
  name: 'delete-file',
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
<path d="M5.244 15.8064L10.284 20.3064M10.284 15.8064L5.244 20.3064M14.5201 3V8.25H20.4001M14.5201 3L20.4001 8.25M14.5201 3H4.4401C4.21732 3 4.00366 3.07902 3.84613 3.21967C3.6886 3.36032 3.6001 3.55109 3.6001 3.75V12M20.4001 8.25V20.25C20.4001 20.4489 20.3116 20.6397 20.1541 20.7803C19.9965 20.921 19.7829 21 19.5601 21H16.2001" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    