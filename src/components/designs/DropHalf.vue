<script>
export default {
  name: 'drop-half',
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
<path d="M19.9059 14.2154C19.9059 7.56923 12.7059 2.4 12.7059 2.4C12.7059 2.4 5.50586 7.56923 5.50586 14.2154C5.50586 16.1739 6.26443 18.0522 7.61469 19.4371C8.96495 20.822 10.7963 21.6 12.7059 21.6C14.6154 21.6 16.4468 20.822 17.797 19.4371C19.1473 18.0522 19.9059 16.1739 19.9059 14.2154Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7058 21.6V2.4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7058 6.83086L19.9058 14.2155" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7058 11.2614L19.0301 17.7478" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.7058 15.6923L17.0261 20.1233" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    