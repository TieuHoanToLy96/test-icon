<script>
export default {
  name: 'helmet-off',
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
<path d="M8.63302 4.65411C10.2694 3.9942 12.0637 3.82988 13.7928 4.18156C15.5219 4.53324 17.1094 5.38542 18.358 6.63213C19.6067 7.87884 20.4613 9.46507 20.8156 11.1936C21.17 12.9221 21.0084 14.7167 20.351 16.3541M18.848 18.8401C18.4873 19.2627 18.0883 19.651 17.656 20.0001H6.34402C5.31572 19.1692 4.4831 18.122 3.90536 16.9329C3.32763 15.7437 3.01895 14.4419 3.00129 13.12C2.98363 11.7981 3.25741 10.4885 3.80318 9.28441C4.34894 8.08028 5.15328 7.01118 6.15902 6.15311" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0001 9H13.0001M10.2321 10.246C10.7391 12.246 11.8281 13.664 13.5001 14.5C14.0241 14.762 14.5701 14.99 15.1401 15.183" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    