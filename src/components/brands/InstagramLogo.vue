<script>
export default {
  name: 'instagram-logo',
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
<path d="M12.2942 15.75C14.3652 15.75 16.0442 14.0711 16.0442 12C16.0442 9.92893 14.3652 8.25 12.2942 8.25C10.2231 8.25 8.54416 9.92893 8.54416 12C8.54416 14.0711 10.2231 15.75 12.2942 15.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4192 3.375H8.16916C5.68388 3.375 3.66916 5.38972 3.66916 7.875V16.125C3.66916 18.6103 5.68388 20.625 8.16916 20.625H16.4192C18.9044 20.625 20.9192 18.6103 20.9192 16.125V7.875C20.9192 5.38972 18.9044 3.375 16.4192 3.375Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1683 8.0625C17.6856 8.0625 18.1049 7.64277 18.1049 7.125C18.1049 6.60723 17.6856 6.1875 17.1683 6.1875C16.651 6.1875 16.2316 6.60723 16.2316 7.125C16.2316 7.64277 16.651 8.0625 17.1683 8.0625Z" fill="currentColor"/>
</svg>

</template>
    