<script>
export default {
  name: 'clipboard-svg',
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
<path d="M15.1769 3.75H18.9268C19.1257 3.75 19.3164 3.82902 19.4571 3.96967C19.5977 4.11032 19.6768 4.30109 19.6768 4.5V20.25C19.6768 20.4489 19.5977 20.6397 19.4571 20.7803C19.3164 20.921 19.1257 21 18.9268 21H5.42676C5.22785 21 5.03708 20.921 4.89643 20.7803C4.75578 20.6397 4.67676 20.4489 4.67676 20.25V4.5C4.67676 4.30109 4.75578 4.11032 4.89643 3.96967C5.03708 3.82902 5.22785 3.75 5.42676 3.75H9.17655M8.42676 6.75V6C8.42676 5.00544 8.82185 4.05161 9.52511 3.34835C10.2284 2.64509 11.1822 2.25 12.1768 2.25C13.1713 2.25 14.1251 2.64509 14.8284 3.34835C15.5317 4.05161 15.9268 5.00544 15.9268 6V6.75H8.42676Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    