<script>
export default {
  name: 'propeller-svg',
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
<path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1671 10.5C14.8891 8.962 15.3231 7.457 15.4701 5.986C15.6901 4.356 14.7081 3 12.0001 3C9.29205 3 8.31005 4.357 8.53005 5.986C8.67705 7.457 9.11105 8.962 9.83305 10.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.1689 16.751C14.1389 18.146 15.2259 19.274 16.4259 20.137C17.7259 21.143 19.3929 20.97 20.7469 18.625C22.1009 16.28 21.4169 14.751 19.8969 14.127C18.5489 13.519 17.0289 13.142 15.3349 12.999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.66403 12.999C6.97103 13.142 5.45103 13.519 4.10403 14.127C2.58203 14.75 1.89803 16.28 3.25203 18.625C4.60603 20.97 6.27203 21.142 7.57303 20.137C8.77303 19.274 9.86003 18.146 10.831 16.751" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    