<script>
export default {
  name: 'newspaper-svg',
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
<path d="M9.23523 10.5H16.7352M9.23523 13.5H16.7352M3.23523 18.75C3.63305 18.75 4.01459 18.592 4.29589 18.3107C4.57719 18.0294 4.73523 17.6478 4.73523 17.25V6C4.73523 5.80109 4.81425 5.61032 4.9549 5.46967C5.09555 5.32902 5.28632 5.25 5.48523 5.25H20.4852C20.6841 5.25 20.8749 5.32902 21.0156 5.46967C21.1562 5.61032 21.2352 5.80109 21.2352 6V17.25C21.2352 17.6478 21.0772 18.0294 20.7959 18.3107C20.5146 18.592 20.1331 18.75 19.7352 18.75H3.23523ZM3.23523 18.75C2.8374 18.75 2.45587 18.592 2.17457 18.3107C1.89326 18.0294 1.73523 17.6478 1.73523 17.25V8.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    