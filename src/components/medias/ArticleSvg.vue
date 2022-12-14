<script>
export default {
  name: 'article-svg',
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
<path d="M7.47778 9H17.2278M7.47778 12H17.2278M7.47778 15H17.2278M4.10278 4.5H20.6028C21.017 4.5 21.3528 4.83579 21.3528 5.25V18.75C21.3528 19.1642 21.017 19.5 20.6028 19.5H4.10278C3.68857 19.5 3.35278 19.1642 3.35278 18.75V5.25C3.35278 4.83579 3.68857 4.5 4.10278 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    