<script>
export default {
  name: 'user-off',
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
<path d="M14.2739 10.2909C14.7555 9.95813 15.1582 9.5237 15.4536 9.01826C15.749 8.51282 15.9298 7.94871 15.9834 7.36575C16.0369 6.78278 15.9618 6.19517 15.7634 5.64439C15.565 5.09362 15.2481 4.59311 14.8352 4.17819C14.4222 3.76327 13.9231 3.44406 13.3733 3.24309C12.8235 3.04212 12.2362 2.96429 11.653 3.01509C11.0698 3.0659 10.5048 3.2441 9.99802 3.53712C9.49121 3.83014 9.0549 4.23083 8.71988 4.71091M8.17188 8.16391C8.3615 8.78469 8.69899 9.35015 9.15535 9.81174C9.61171 10.2733 10.1733 10.6172 10.7919 10.8139" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C14.3884 14.9997 14.7748 15.0559 15.147 15.167M17.832 17.848C17.9439 18.2218 18.0005 18.6099 18 19V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    