<script>
export default {
  name: 'currency-guarani',
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
<path d="M16.0071 7.54001C14.9086 6.54696 13.4799 5.99804 11.9991 6.00001C11.2117 6.00053 10.4321 6.15614 9.70482 6.45795C8.97755 6.75977 8.31685 7.20187 7.76044 7.75902C7.20403 8.31617 6.76281 8.97746 6.46197 9.70513C6.16113 10.4328 6.00656 11.2126 6.00708 12C6.00708 15.314 8.68908 18 11.9991 18C13.478 18.0021 14.905 17.4547 16.0031 16.464C16.7351 15.804 17.0671 14.316 17.0001 12H12.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    