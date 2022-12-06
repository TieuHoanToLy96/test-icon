<script>
export default {
  name: 'headphones-off',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13H6C4.89543 13 4 13.8954 4 15V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V15C9 13.8954 8.10457 13 7 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 13H18C18.5304 13 19.0391 13.2107 19.4142 13.5858C19.7893 13.9609 20 14.4696 20 15V16M19.411 19.417C19.05 19.777 18.551 20 18 20H17C16.4696 20 15.9609 19.7893 15.5858 19.4142C15.2107 19.0391 15 18.5304 15 18V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15V12C4 9.79003 4.896 7.79003 6.344 6.34203M8.713 4.70403C9.93158 4.15485 11.2683 3.91974 12.6012 4.02018C13.934 4.12062 15.2204 4.5534 16.3429 5.279C17.4654 6.0046 18.3883 6.99989 19.0271 8.17395C19.6659 9.34801 20.0004 10.6634 20 12V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    