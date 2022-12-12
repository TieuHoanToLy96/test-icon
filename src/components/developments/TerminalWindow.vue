<script>
export default {
  name: 'terminal-window',
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
<path d="M7.79407 9L11.5441 12L7.79407 15M13.0435 15H16.7935M4.08956 4.5H20.4986C20.9379 4.5 21.2941 4.85616 21.2941 5.29549V18.7045C21.2941 19.1438 20.9379 19.5 20.4986 19.5H4.08956C3.65022 19.5 3.29407 19.1438 3.29407 18.7045V5.29549C3.29407 4.85616 3.65022 4.5 4.08956 4.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    