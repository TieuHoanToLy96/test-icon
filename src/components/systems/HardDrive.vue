<script>
export default {
  name: 'hard-drive',
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
<path d="M21.647 6.75H3.64697C3.23276 6.75 2.89697 7.08579 2.89697 7.5V16.5C2.89697 16.9142 3.23276 17.25 3.64697 17.25H21.647C22.0612 17.25 22.397 16.9142 22.397 16.5V7.5C22.397 7.08579 22.0612 6.75 21.647 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2711 12.9375C18.7884 12.9375 19.2078 12.5178 19.2078 12C19.2078 11.4822 18.7884 11.0625 18.2711 11.0625C17.7538 11.0625 17.3345 11.4822 17.3345 12C17.3345 12.5178 17.7538 12.9375 18.2711 12.9375Z" fill="currentColor"/>
</svg>

</template>
    