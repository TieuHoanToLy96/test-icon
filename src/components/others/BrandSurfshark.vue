<script>
export default {
  name: 'brand-surfshark',
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
<path d="M19.954 9.44699C19.717 3.22999 19.954 3.22999 13.958 3.02199C8.18401 2.81399 7.13401 4.02399 6.04801 8.40399C3.16401 20.22 2.20301 23.12 10.84 19.602C20.232 15.771 20.137 14.22 19.954 9.44699V9.44699Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16.0001H8.452C10.395 16.0071 11.978 14.5391 11.995 12.7141V10.2861C12.013 8.45807 13.602 6.98807 15.548 7.00007H16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    