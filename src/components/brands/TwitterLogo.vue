<script>
export default {
  name: 'twitter-logo',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3529 8.25027C12.353 7.38867 12.6497 6.55337 13.1932 5.8848C13.7367 5.21624 14.4938 4.75517 15.3372 4.57913C16.1806 4.40309 17.059 4.5228 17.8245 4.91814C18.59 5.31348 19.1961 5.96034 19.5409 6.74997L22.8529 6.75L19.8283 9.77461C19.6314 12.8168 18.284 15.67 16.0599 17.7548C13.8357 19.8397 10.9015 20.9999 7.85292 21C4.85292 21 4.10292 19.875 4.10292 19.875C4.10292 19.875 7.10292 18.75 8.60292 16.5C8.60292 16.5 2.60292 13.5 4.10292 5.25C4.10292 5.25 7.85292 9 12.3516 9.75L12.3529 8.25027Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    