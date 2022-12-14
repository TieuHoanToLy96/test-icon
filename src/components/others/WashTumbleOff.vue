<script>
export default {
  name: 'wash-tumble-off',
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
<path d="M20.116 20.127C19.8379 20.4044 19.5079 20.6242 19.1448 20.774C18.7818 20.9238 18.3928 21.0006 18 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.173 3.335 4.424 3.877 3.88M7 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.744 13.7401C18.0593 12.7002 18.0863 11.5941 17.8221 10.5401C17.5578 9.48598 17.0123 8.52345 16.2436 7.75525C15.475 6.98704 14.5122 6.44201 13.458 6.17833C12.4038 5.91465 11.2977 5.94223 10.258 6.25813M7.75896 7.75513C7.19405 8.31028 6.74464 8.97179 6.43666 9.70149C6.12869 10.4312 5.96823 11.2146 5.96454 12.0067C5.96086 12.7987 6.11402 13.5836 6.4152 14.3161C6.71638 15.0487 7.15962 15.7143 7.71934 16.2747C8.27906 16.8351 8.94419 17.2791 9.67637 17.5812C10.4085 17.8832 11.1933 18.0373 11.9853 18.0345C12.7773 18.0318 13.561 17.8722 14.291 17.5651C15.0211 17.258 15.6831 16.8094 16.239 16.2451" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    