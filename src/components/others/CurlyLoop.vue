<script>
export default {
  name: 'curly-loop',
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
<path d="M21 8C17 8 14 10 14 13C14 13.7956 14.3161 14.5587 14.8787 15.1213C15.4413 15.6839 16.2044 16 17 16C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13C20 10 17.5 8 12 8C6.5 8 4 10 4 13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16C7.79565 16 8.55871 15.6839 9.12132 15.1213C9.68393 14.5587 10 13.7956 10 13C10 10 7 8 3 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    