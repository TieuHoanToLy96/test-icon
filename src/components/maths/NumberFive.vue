<script>
export default {
  name: 'number-five',
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
<path d="M16.8528 3H9.3218L7.85278 12.0379C8.58699 11.3037 9.52243 10.8037 10.5408 10.6011C11.5592 10.3986 12.6148 10.5025 13.5741 10.8999C14.5333 11.2972 15.3533 11.9701 15.9301 12.8335C16.507 13.6968 16.8149 14.7118 16.8149 15.7501C16.8149 16.7885 16.507 17.8035 15.9301 18.6668C15.3533 19.5302 14.5333 20.2031 13.5741 20.6004C12.6148 20.9978 11.5592 21.1017 10.5408 20.8991C9.52243 20.6966 8.58699 20.1966 7.85278 19.4624" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    