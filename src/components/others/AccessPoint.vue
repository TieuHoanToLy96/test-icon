<script>
export default {
  name: 'access-point',
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
<path d="M12 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.828 9.17212C15.5779 9.92223 15.9991 10.9395 15.9991 12.0001C15.9991 13.0608 15.5779 14.078 14.828 14.8281" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.657 6.34302C18.3999 7.08589 18.9892 7.96782 19.3913 8.93846C19.7933 9.90909 20.0003 10.9494 20.0003 12C20.0003 13.0506 19.7933 14.0909 19.3913 15.0616C18.9892 16.0322 18.3999 16.9141 17.657 17.657" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16797 14.8281C8.41809 14.078 7.99683 13.0608 7.99683 12.0001C7.99683 10.9395 8.41809 9.92223 9.16797 9.17212" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.337 17.657C5.59409 16.9141 5.00478 16.0322 4.60272 15.0616C4.20065 14.0909 3.99371 13.0506 3.99371 12C3.99371 10.9494 4.20065 9.90909 4.60272 8.93846C5.00478 7.96782 5.59409 7.08589 6.337 6.34302" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    