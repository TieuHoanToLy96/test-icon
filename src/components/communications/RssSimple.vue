<script>
export default {
  name: 'rss-simple',
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
<path d="M6.01465 4.5C9.79398 4.5 13.4185 6.00134 16.0909 8.67373C18.7633 11.3461 20.2646 14.9707 20.2646 18.75M6.01465 11.25C6.99956 11.25 7.97483 11.444 8.88477 11.8209C9.79472 12.1978 10.6215 12.7503 11.3179 13.4467C12.0144 14.1431 12.5668 14.9699 12.9437 15.8799C13.3207 16.7898 13.5146 17.7651 13.5146 18.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.01379 19.6875C6.53108 19.6875 6.95043 19.2678 6.95043 18.75C6.95043 18.2322 6.53108 17.8125 6.01379 17.8125C5.4965 17.8125 5.07715 18.2322 5.07715 18.75C5.07715 19.2678 5.4965 19.6875 6.01379 19.6875Z" fill="currentColor"/>
</svg>

</template>
    