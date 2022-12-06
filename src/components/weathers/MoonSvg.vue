<script>
export default {
  name: 'moon-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9591 14.3109C19.4868 14.72 17.9323 14.7308 16.4545 14.3421C14.9767 13.9534 13.6287 13.1793 12.5482 12.0988C11.4677 11.0183 10.6935 9.67025 10.3049 8.19247C9.9162 6.71468 9.92697 5.16019 10.3361 3.68793L10.3363 3.688C8.88419 4.09197 7.56326 4.86936 6.50511 5.94275C5.44696 7.01614 4.68852 8.34805 4.30536 9.8058C3.92219 11.2636 3.92768 12.7963 4.32126 14.2512C4.71484 15.7062 5.48278 17.0326 6.54858 18.0984C7.61439 19.1642 8.94084 19.9322 10.3958 20.3257C11.8508 20.7193 13.3835 20.7248 14.8412 20.3416C16.299 19.9584 17.6309 19.2 18.7043 18.1418C19.7776 17.0836 20.555 15.7627 20.959 14.3106L20.9591 14.3109Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    