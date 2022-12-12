<script>
export default {
  name: 'brand-webflow',
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
<path d="M17 10C17 10 15.624 13.606 15.5 14C15.454 13.6 14 6.00001 14 6.00001C11.373 6.00001 10.234 7.56201 9.5 9.50001C9.5 9.50001 7.657 14.093 7.5 14.5C7.487 14.132 7 10 7 10C6.85 7.62901 4.789 6.02001 3 6.02001L5 19C7.745 18.987 9.72 17.438 10.5 15.5C10.5 15.5 11.94 11.2 12 11C12.013 11.18 13 19 13 19C15.758 19 17.694 17.374 18.5 15.5L22 6.00001C19.268 5.99401 17.747 8.05501 17 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    