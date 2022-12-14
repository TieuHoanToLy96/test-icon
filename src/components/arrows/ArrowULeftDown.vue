<script>
export default {
  name: 'arrow-uleft-down',
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
<path d="M12.75 16.5L8.25 21M8.25 21L3.75 16.5M8.25 21V8.24999C8.25 7.56055 8.38579 6.87786 8.64963 6.24091C8.91347 5.60395 9.30018 5.02519 9.78769 4.53769C10.2752 4.05018 10.8539 3.66347 11.4909 3.39963C12.1279 3.13579 12.8106 3 13.5 3C14.8924 3 16.2277 3.55312 17.2123 4.53769C18.1969 5.52226 18.75 6.85761 18.75 8.25V16.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    