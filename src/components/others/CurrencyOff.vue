<script>
export default {
  name: 'currency-off',
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
<path d="M18.531 14.5241C19.0209 13.2585 19.1324 11.8778 18.8518 10.55C18.5713 9.22225 17.9108 8.00465 16.9509 7.04541C15.9909 6.08618 14.7728 5.42667 13.4448 5.14716C12.1168 4.86764 10.7362 4.98018 9.47099 5.47106M7.04899 7.05306C5.7367 8.36628 4.99983 10.147 5.00049 12.0035C5.00115 13.8601 5.73927 15.6403 7.05249 16.9526C8.36571 18.2649 10.1465 19.0017 12.003 19.0011C13.8595 19.0004 15.6397 18.2623 16.952 16.9491" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L7 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4L17 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20L7 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20L17 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    