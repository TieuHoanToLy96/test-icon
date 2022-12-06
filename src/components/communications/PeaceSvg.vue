<script>
export default {
  name: 'peace-svg',
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
<path d="M12.0587 21C17.0293 21 21.0587 16.9706 21.0587 12C21.0587 7.02944 17.0293 3 12.0587 3M12.0587 21C7.08815 21 3.05872 16.9706 3.05872 12C3.05872 7.02944 7.08815 3 12.0587 3M12.0587 21V12M12.0587 3V12M12.0587 12L19.4311 17.1622M12.0587 12L4.68635 17.1622" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    