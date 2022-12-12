<script>
export default {
  name: 'bleach-off',
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
<path d="M5.00001 19H19M20.986 17.023C20.989 16.7582 20.9393 16.4955 20.84 16.25L13.74 4.00002C13.567 3.68741 13.3135 3.42685 13.0058 3.2454C12.698 3.06396 12.3473 2.96826 11.99 2.96826C11.6327 2.96826 11.282 3.06396 10.9743 3.2454C10.6665 3.42685 10.413 3.68741 10.24 4.00002L9.42501 5.40502M7.93701 7.97302L3.14001 16.25C3.01995 16.5456 2.97234 16.8656 3.00116 17.1833C3.02997 17.501 3.13438 17.8073 3.30566 18.0764C3.47694 18.3456 3.71012 18.5698 3.98573 18.7305C4.26135 18.8912 4.5714 18.9836 4.89001 19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    