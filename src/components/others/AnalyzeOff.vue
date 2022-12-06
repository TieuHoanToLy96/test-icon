<script>
export default {
  name: 'analyze-off',
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
<path d="M20.0001 10.9999C19.7555 9.24023 18.9391 7.60981 17.6768 6.35974C16.4144 5.10967 14.7761 4.30929 13.0141 4.08188C11.5478 3.89056 10.0571 4.105 8.70412 4.70188M6.32112 6.30988C5.80595 6.81176 5.36002 7.38011 4.99512 7.99988" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13C4.20628 14.4851 4.82071 15.8838 5.77487 17.0403C6.72903 18.1969 7.98548 19.0659 9.40431 19.5506C10.8231 20.0353 12.3487 20.1168 13.811 19.7858C15.2734 19.4548 16.6152 18.7244 17.687 17.676" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16C20 15.7348 19.8946 15.4804 19.7071 15.2929C19.5196 15.1054 19.2652 15 19 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 9C5.55228 9 6 8.55228 6 8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.88794 9.87004C9.60516 10.1472 9.38004 10.4776 9.22556 10.8421C9.07108 11.2067 8.99029 11.5982 8.98785 11.9941C8.98541 12.3901 9.06138 12.7826 9.21136 13.149C9.36134 13.5155 9.58238 13.8486 9.86173 14.1292C10.1411 14.4098 10.4732 14.6323 10.839 14.7839C11.2047 14.9355 11.5969 15.0133 11.9928 15.0126C12.3888 15.0119 12.7807 14.9329 13.1459 14.7801C13.5112 14.6272 13.8425 14.4036 14.1209 14.122M14.7159 10.725C14.4203 10.0966 13.9165 9.58966 13.2899 9.29004" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    