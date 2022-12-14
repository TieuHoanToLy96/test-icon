<script>
export default {
  name: 'access-point-off',
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
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.828 9.17212C15.5782 9.92209 15.9998 10.9393 16 12.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.657 6.34302C18.8068 7.4923 19.5792 8.96463 19.8713 10.5639C20.1634 12.1632 19.9613 13.8135 19.292 15.295" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16797 14.8281C8.41809 14.078 7.99683 13.0608 7.99683 12.0001C7.99683 10.9395 8.41809 9.92223 9.16797 9.17212" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33694 17.657C5.59403 16.9141 5.00472 16.0322 4.60266 15.0616C4.20059 14.0909 3.99365 13.0506 3.99365 12C3.99365 10.9494 4.20059 9.90909 4.60266 8.93846C5.00472 7.96782 5.59403 7.08589 6.33694 6.34302" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    