<script>
export default {
  name: 'sketch-logo',
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
<path d="M22.7942 9.75L17.5442 3.75H7.04416L1.79416 9.75M22.7942 9.75L12.2942 21M22.7942 9.75H1.79416M12.2942 21L1.79416 9.75M12.2942 21L16.8964 9.75L12.2942 3.75L7.69188 9.75L12.2942 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    