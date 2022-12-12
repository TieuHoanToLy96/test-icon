<script>
export default {
  name: 'watch-svg',
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
<path d="M12.5884 8.25V12H16.3384M8.83838 6.38698L9.47666 2.86621C9.50801 2.69332 9.59906 2.53693 9.73393 2.42431C9.8688 2.31169 10.0389 2.25 10.2146 2.25H14.9621C15.1378 2.25 15.308 2.31169 15.4428 2.42431C15.5777 2.53693 15.6687 2.69332 15.7001 2.86621L16.3384 6.387M8.83838 17.613L9.47666 21.1338C9.50801 21.3067 9.59906 21.4631 9.73393 21.5757C9.8688 21.6883 10.0389 21.75 10.2146 21.75H14.9621C15.1378 21.75 15.308 21.6883 15.4428 21.5757C15.5777 21.4631 15.6687 21.3067 15.7001 21.1338L16.3384 17.613M19.3384 12C19.3384 15.7279 16.3163 18.75 12.5884 18.75C8.86046 18.75 5.83838 15.7279 5.83838 12C5.83838 8.27208 8.86046 5.25 12.5884 5.25C16.3163 5.25 19.3384 8.27208 19.3384 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    