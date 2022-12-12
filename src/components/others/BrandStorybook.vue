<script>
export default {
  name: 'brand-storybook',
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
<path d="M5 4L5.5 20.5L19 21V3L5 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15C9.6 16.5 10.639 17 12.283 17H12C13.8 17 15 16.026 15 14.565C15 13.371 14.169 12.766 12.853 12.232L10.878 11.43C9.728 10.963 9 10.008 9 8.96295C9 7.99295 9.899 7.17695 11.087 7.06995L11.7 7.01495C13.228 6.87695 14.699 7.77695 15 8.99995" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.5V4.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    