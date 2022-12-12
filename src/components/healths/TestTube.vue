<script>
export default {
  name: 'test-tube',
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
<path d="M6.96326 12.75C6.96326 12.75 8.83826 11.25 11.8383 12.75C14.8383 14.25 16.7133 12.75 16.7133 12.75M20.0883 9.375L9.40076 20.0625C9.08066 20.3826 8.70065 20.6365 8.28243 20.8097C7.8642 20.983 7.41595 21.0721 6.96326 21.0721C6.51058 21.0721 6.06232 20.983 5.6441 20.8097C5.22587 20.6365 4.84586 20.3826 4.52576 20.0625C4.20566 19.7424 3.95175 19.3624 3.77851 18.9442C3.60528 18.5259 3.51611 18.0777 3.51611 17.625C3.51611 17.1723 3.60528 16.7241 3.77851 16.3058C3.95175 15.8876 4.20566 15.5076 4.52576 15.1875L16.7133 3L22.3383 8.625L20.0883 9.375Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    