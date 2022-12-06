<script>
export default {
  name: 'pinterest-logo',
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
<path d="M11.4265 8.25L8.42646 21M5.94626 14.6769C5.29382 13.7037 4.87846 12.5912 4.73347 11.4285C4.58847 10.2658 4.71788 9.08539 5.11131 7.98177C5.50475 6.87814 6.15127 5.88203 6.99905 5.07329C7.84683 4.26456 8.8723 3.66569 9.99323 3.32469C11.1142 2.98368 12.2994 2.91004 13.4539 3.10965C14.6085 3.30926 15.7002 3.77658 16.6416 4.47415C17.5829 5.17171 18.3478 6.08012 18.8748 7.12655C19.4019 8.17299 19.6764 9.32834 19.6765 10.5C19.6765 14.6421 16.6765 17.25 13.6765 17.25C10.6765 17.25 9.77351 15.275 9.77351 15.275" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    