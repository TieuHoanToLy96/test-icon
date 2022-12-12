<script>
export default {
  name: 'barbell-svg',
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
<path d="M19.102 7.5H21.352C21.551 7.5 21.7417 7.57902 21.8824 7.71967C22.023 7.86032 22.102 8.05109 22.102 8.25V15.75C22.102 15.9489 22.023 16.1397 21.8824 16.2803C21.7417 16.421 21.551 16.5 21.352 16.5H19.102M5.60205 16.5H3.35205C3.15314 16.5 2.96237 16.421 2.82172 16.2803C2.68107 16.1397 2.60205 15.9489 2.60205 15.75V8.25C2.60205 8.05109 2.68107 7.86032 2.82172 7.71967C2.96237 7.57902 3.15314 7.5 3.35205 7.5H5.60205M9.35205 12H15.352M22.102 12H23.602M1.10205 12H2.60205M6.35205 5.25H8.60205C9.01626 5.25 9.35205 5.58579 9.35205 6V18C9.35205 18.4142 9.01626 18.75 8.60205 18.75H6.35205C5.93784 18.75 5.60205 18.4142 5.60205 18V6C5.60205 5.58579 5.93784 5.25 6.35205 5.25ZM16.102 5.25H18.352C18.7663 5.25 19.102 5.58579 19.102 6V18C19.102 18.4142 18.7663 18.75 18.352 18.75H16.102C15.6878 18.75 15.352 18.4142 15.352 18V6C15.352 5.58579 15.6878 5.25 16.102 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    