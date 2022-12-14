<script>
export default {
  name: 'gender-genderqueer',
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
<path d="M12 11C13.3261 11 14.5979 11.5268 15.5355 12.4645C16.4732 13.4021 17 14.6739 17 16C17 17.3261 16.4732 18.5979 15.5355 19.5355C14.5979 20.4732 13.3261 21 12 21C10.6739 21 9.40215 20.4732 8.46447 19.5355C7.52678 18.5979 7 17.3261 7 16C7 14.6739 7.52678 13.4021 8.46447 12.4645C9.40215 11.5268 10.6739 11 12 11Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11V3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 4.5L9.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 4.5L14.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    