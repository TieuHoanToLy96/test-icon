<script>
export default {
  name: 'brand-twitch',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00002 5V16C4.00002 16.2652 4.10538 16.5196 4.29292 16.7071C4.48045 16.8946 4.73481 17 5.00002 17H7.00002V21L11 17H16.584C16.85 17 17.104 16.895 17.291 16.707L19.706 14.293C19.893 14.105 19.999 13.851 19.999 13.585V5C19.999 4.73478 19.8937 4.48043 19.7061 4.29289C19.5186 4.10536 19.2642 4 18.999 4H4.99902C4.73381 4 4.47945 4.10536 4.29192 4.29289C4.10438 4.48043 3.99902 4.73478 3.99902 5H4.00002Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    