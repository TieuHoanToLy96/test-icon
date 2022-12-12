<script>
export default {
  name: 'text-underline',
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
<path d="M3.75024 20.25H20.2502M6.00024 5.25V11.25C6.00024 12.8413 6.63239 14.3674 7.7576 15.4926C8.88282 16.6179 10.4089 17.25 12.0002 17.25C13.5915 17.25 15.1177 16.6179 16.2429 15.4926C17.3681 14.3674 18.0002 12.8413 18.0002 11.25V5.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    