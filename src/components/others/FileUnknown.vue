<script>
export default {
  name: 'file-unknown',
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
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17V17.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0001 14C12.2518 14.0001 12.4995 13.9369 12.7204 13.8162C12.9412 13.6954 13.1281 13.5211 13.2639 13.3091C13.3997 13.0972 13.4799 12.8545 13.4973 12.6034C13.5146 12.3523 13.4685 12.1009 13.3632 11.8723C13.2579 11.6437 13.0967 11.4452 12.8945 11.2953C12.6924 11.1453 12.4557 11.0486 12.2064 11.0141C11.9571 10.9797 11.7031 11.0085 11.4678 11.0979C11.2325 11.1874 11.0235 11.3346 10.8601 11.526" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    