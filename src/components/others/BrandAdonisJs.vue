<script>
export default {
  name: 'brand-adonis-js',
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
<path d="M12 3C19.2 3 21 4.8 21 12C21 19.2 19.2 21 12 21C4.8 21 3 19.2 3 12C3 4.8 4.8 3 12 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.86303 16.9221C10 16.5001 10.5 16.0001 12 16.0001C13.5 16.0001 14 16.5001 15.138 16.9221C15.851 17.1861 16.654 16.8201 16.916 16.1501C17.042 15.8301 17.026 15.4771 16.872 15.1671L13.164 7.69306C12.867 7.09506 12.106 6.83406 11.464 7.11006C11.1924 7.22378 10.9702 7.43044 10.837 7.69306L7.12803 15.1671C6.80703 15.8151 7.11103 16.5821 7.80703 16.8811C8.13903 17.0241 8.52203 17.0481 8.86303 16.9211V16.9221Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    