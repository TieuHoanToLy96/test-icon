<script>
export default {
  name: 'bold-off',
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
<path d="M9 5H13C13.7213 5.00005 14.425 5.22295 15.0147 5.63821C15.6045 6.05347 16.0516 6.6408 16.2948 7.31986C16.538 7.99892 16.5655 8.73654 16.3734 9.4318C16.1814 10.1271 15.7793 10.746 15.222 11.204M12 12H7V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.107 17.112C16.8117 17.6811 16.3658 18.1581 15.8179 18.4911C15.27 18.824 14.6411 19.0001 14 19H7V12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    