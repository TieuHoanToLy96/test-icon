<script>
export default {
  name: 'barrel-svg',
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
<path d="M7.278 4H16.722C17.1148 4.00012 17.4988 4.11588 17.8262 4.33284C18.1536 4.5498 18.4098 4.85835 18.563 5.22C19.521 7.48 20 9.74 20 12C20 14.26 19.521 16.52 18.563 18.78C18.4098 19.1417 18.1536 19.4502 17.8262 19.6672C17.4988 19.8841 17.1148 19.9999 16.722 20H7.278C6.88525 19.9999 6.50122 19.8841 6.17383 19.6672C5.84644 19.4502 5.59017 19.1417 5.437 18.78C4.479 16.52 4 14.26 4 12C4 9.74 4.479 7.48 5.437 5.22C5.59017 4.85835 5.84644 4.5498 6.17383 4.33284C6.50122 4.11588 6.88525 4.00012 7.278 4V4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 4C14.667 6.667 15 9.333 15 12C15 14.667 14.667 17.333 14 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 4C9.333 6.667 9 9.333 9 12C9 14.667 9.333 17.333 10 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 16H19.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 8H4.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    