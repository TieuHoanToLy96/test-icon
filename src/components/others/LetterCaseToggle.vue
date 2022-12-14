<script>
export default {
  name: 'letter-case-toggle',
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
<path d="M6.5 19C8.433 19 10 17.433 10 15.5C10 13.567 8.433 12 6.5 12C4.567 12 3 13.567 3 15.5C3 17.433 4.567 19 6.5 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 19V8.5C14 7.57174 14.3687 6.6815 15.0251 6.02513C15.6815 5.36875 16.5717 5 17.5 5C18.4283 5 19.3185 5.36875 19.9749 6.02513C20.6313 6.6815 21 7.57174 21 8.5V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 13H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    