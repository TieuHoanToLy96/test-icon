<script>
export default {
  name: 'currency-cent',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.007 7.54001C14.9085 6.54696 13.4799 5.99804 11.999 6.00001C11.2116 6.00053 10.432 6.15614 9.70476 6.45795C8.97749 6.75977 8.31679 7.20187 7.76038 7.75902C7.20397 8.31617 6.76275 8.97746 6.46191 9.70513C6.16107 10.4328 6.00649 11.2126 6.00702 12C6.00702 15.314 8.68902 18 11.999 18C13.478 18.0021 14.9049 17.4547 16.003 16.464" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    