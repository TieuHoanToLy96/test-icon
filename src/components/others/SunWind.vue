<script>
export default {
  name: 'sun-wind',
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
<path d="M14.4679 10.005C14.1617 9.47303 13.7372 9.01866 13.2272 8.67708C12.7172 8.33551 12.1355 8.11587 11.527 8.03519C10.9185 7.95451 10.2996 8.01495 9.71825 8.21182C9.13688 8.40869 8.60861 8.73672 8.17435 9.17051C7.74008 9.6043 7.41148 10.1322 7.21397 10.7134C7.01645 11.2945 6.95534 11.9133 7.03535 12.5219C7.11536 13.1305 7.33436 13.7125 7.67537 14.2228C8.01639 14.7332 8.47029 15.1582 9.00192 15.465" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 3V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.6001 5.6001L5.3001 6.3001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4 5.6001L16.7 6.3001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.3001 17.7002L4.6001 18.4002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13H20C20.5304 13 21.0391 12.7893 21.4142 12.4142C21.7893 12.0391 22 11.5304 22 11C22 10.4696 21.7893 9.96086 21.4142 9.58579C21.0391 9.21071 20.5304 9 20 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15.9998H17.714L17.967 15.9958C18.2326 15.992 18.4963 16.041 18.7428 16.14C18.9893 16.2389 19.2137 16.3859 19.4028 16.5724C19.592 16.7589 19.7422 16.9811 19.8447 17.2262C19.9472 17.4712 20 17.7342 20 17.9998C20 18.5302 19.7893 19.039 19.4142 19.414C19.0391 19.7891 18.5304 19.9998 18 19.9998H17.714" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    