<script>
export default {
  name: 'carrot-svg',
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
<path d="M3 21.0001C3 21.0001 12.834 17.5111 15.684 14.6601C16.5257 13.8193 16.999 12.6788 16.9999 11.4891C17.0009 10.2995 16.5293 9.15817 15.689 8.31609C15.273 7.89917 14.7789 7.5683 14.235 7.3424C13.6911 7.11649 13.108 6.99998 12.519 6.99951C11.9301 6.99905 11.3468 7.11464 10.8025 7.33969C10.2582 7.56474 9.76365 7.89483 9.347 8.31109C6.487 11.1721 3 21.0001 3 21.0001V21.0001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 13L7.5 11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 14L14 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8C22 8 20.86 6 19 6C17.594 6 16 8 16 8C16 8 17.14 10 19 10C20.86 10 22 8 22 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2C16 2 14 3.14 14 5C14 6.86 16 8 16 8C16 8 18 6.423 18 5C18 3.14 16 2 16 2Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    