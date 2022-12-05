<script>
export default {
  name: 'brand-cypress',
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
      default: 1.5
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
<path d="M19.4801 17.007C20.5965 15.3395 21.1236 13.3467 20.9776 11.3453C20.8316 9.3439 20.021 7.44869 18.6744 5.96083C17.3279 4.47297 15.5227 3.47781 13.5457 3.13349C11.5688 2.78917 9.53343 3.11544 7.76315 4.06045C5.99287 5.00547 4.5892 6.51502 3.77519 8.34923C2.96117 10.1834 2.78351 12.2371 3.27044 14.1838C3.75736 16.1306 4.88094 17.8588 6.46263 19.0938C8.04432 20.3288 9.99338 20.9997 12.0001 21C12.8961 21 13.6911 20.427 13.9741 19.577L17.5001 9.00001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 9L15.5 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7638 9.41094C10.309 9.14443 9.79205 9.00246 9.26493 8.99932C8.73782 8.99618 8.21918 9.13199 7.76124 9.39306C7.30331 9.65413 6.92225 10.0313 6.65643 10.4865C6.39062 10.9417 6.24944 11.4589 6.2471 11.986C6.24476 12.5131 6.38136 13.0315 6.64313 13.4891C6.9049 13.9466 7.2826 14.3271 7.7382 14.5922C8.1938 14.8573 8.71122 14.9977 9.23834 14.9993C9.76547 15.0008 10.2837 14.8634 10.7408 14.6009" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    