<script>
export default {
  name: 'speaker-simple-x',
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
<path d="M22.7942 9.75L18.2942 14.25M22.7942 14.25L18.2942 9.75M7.79419 15.75H3.29419C3.09528 15.75 2.90451 15.671 2.76386 15.5303C2.62321 15.3897 2.54419 15.1989 2.54419 15V9C2.54419 8.80109 2.62321 8.61032 2.76386 8.46967C2.90451 8.32902 3.09528 8.25 3.29419 8.25H7.79419L14.5442 3V21L7.79419 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    