<script>
export default {
  name: 'currency-inr',
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
<path d="M6.98529 7.5H18.9853M6.98529 3.75H18.9853M10.3603 3.75C11.6532 3.75 12.8932 4.26361 13.8074 5.17785C14.7217 6.09209 15.2353 7.33207 15.2353 8.625C15.2353 9.91793 14.7217 11.1579 13.8074 12.0721C12.8932 12.9864 11.6532 13.5 10.3603 13.5H6.98529L15.2353 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    