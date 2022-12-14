<script>
export default {
  name: 'number-square-four',
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
<path d="M12.1541 7.125L9.9043 13.5H14.4043M14.4043 10.5V16.5M5.0293 3.75H20.0293C20.4435 3.75 20.7793 4.08579 20.7793 4.5V19.5C20.7793 19.9142 20.4435 20.25 20.0293 20.25H5.0293C4.61508 20.25 4.2793 19.9142 4.2793 19.5V4.5C4.2793 4.08579 4.61508 3.75 5.0293 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    