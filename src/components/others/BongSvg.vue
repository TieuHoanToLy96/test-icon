<script>
export default {
  name: 'bong-svg',
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
<path d="M13 3V11.416C13.134 11.475 13.265 11.539 13.393 11.609L17 8L19 10L15.392 13.608C15.8736 14.4928 16.0767 15.5025 15.9747 16.5047C15.8726 17.507 15.4703 18.455 14.8202 19.2246C14.1702 19.9943 13.3029 20.5496 12.3318 20.8179C11.3608 21.0861 10.3314 21.0548 9.37844 20.728C8.42551 20.4012 7.59352 19.7942 6.99147 18.9865C6.38942 18.1788 6.04541 17.208 6.00449 16.2015C5.96358 15.1949 6.22768 14.1994 6.76219 13.3455C7.2967 12.4916 8.07668 11.819 8.99995 11.416V3H13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.09998 17H15.9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    