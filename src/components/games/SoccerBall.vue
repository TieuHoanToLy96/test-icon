<script>
export default {
  name: 'soccer-ball',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.353 8.0625L8.60828 10.7832M12.353 8.0625L16.0978 10.7832M12.353 8.0625V6M8.60828 10.7832L10.0386 15.1855M8.60828 10.7832L6.64669 10.1459M10.0386 15.1855H14.6674M10.0386 15.1855L8.82632 16.8541M14.6674 15.1855L16.0978 10.7832M14.6674 15.1855L15.8797 16.8541M16.0978 10.7832L18.0594 10.1459M12.353 6L15.6358 3.61753M12.353 6L9.07028 3.61753M6.64669 10.1459L5.39528 6.28753M6.64669 10.1459L3.36643 12.5318M8.82632 16.8541L4.77015 16.8519M8.82632 16.8541L10.0817 20.7111M15.8797 16.8541L14.6243 20.7112M15.8797 16.8541L19.9359 16.8519M18.0594 10.1459L21.3396 12.5318M18.0594 10.1459L19.3108 6.28763M21.353 12C21.353 16.9706 17.3236 21 12.353 21C7.38247 21 3.35303 16.9706 3.35303 12C3.35303 7.02944 7.38247 3 12.353 3C17.3236 3 21.353 7.02944 21.353 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    