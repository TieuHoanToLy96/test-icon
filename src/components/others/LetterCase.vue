<script>
export default {
  name: 'letter-case',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C15.567 12 14 13.567 14 15.5C14 17.433 15.567 19 17.5 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 19V8.5C3 7.57174 3.36875 6.6815 4.02513 6.02513C4.6815 5.36875 5.57174 5 6.5 5C7.42826 5 8.3185 5.36875 8.97487 6.02513C9.63125 6.6815 10 7.57174 10 8.5V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13H10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12V19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    