<script>
export default {
  name: 'speaker-simple-high',
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
<path d="M18.5276 9.75V14.25M21.5276 8.25V15.75M8.0293 15.75H3.5293C3.33038 15.75 3.13962 15.671 2.99897 15.5303C2.85831 15.3897 2.7793 15.1989 2.7793 15V9C2.7793 8.80109 2.85831 8.61032 2.99897 8.46967C3.13962 8.32902 3.33038 8.25 3.5293 8.25H8.0293L14.7793 3V21L8.0293 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    