<script>
export default {
  name: 'arrow-sharp-turn-right',
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
<path d="M7 18V6.69004C6.99999 6.55159 7.04104 6.41624 7.11796 6.30112C7.19487 6.18599 7.3042 6.09626 7.43211 6.04328C7.56003 5.99029 7.70078 5.97643 7.83658 6.00344C7.97237 6.03046 8.0971 6.09713 8.195 6.19504L18 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 16H18V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    