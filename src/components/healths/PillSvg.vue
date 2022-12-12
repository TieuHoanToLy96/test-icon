<script>
export default {
  name: 'pill-svg',
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
<path d="M9.47067 9.00003L15.4707 15M15.4772 10.5065L17.7662 8.29552M4.97066 13.5L13.9707 4.50002C15.6275 2.84317 18.3138 2.84317 19.9707 4.50002C21.6275 6.15688 21.6275 8.84317 19.9707 10.5L10.9707 19.5C9.31381 21.1569 6.62752 21.1569 4.97067 19.5C3.31382 17.8432 3.31381 15.1569 4.97066 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    