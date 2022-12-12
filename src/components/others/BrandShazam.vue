<script>
export default {
  name: 'brand-shazam',
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
<path d="M10 12L12 9.99999C12.2626 9.7373 12.5744 9.52891 12.9176 9.38674C13.2607 9.24456 13.6285 9.17139 14 9.17139C14.3715 9.17139 14.7393 9.24456 15.0824 9.38674C15.4256 9.52891 15.7374 9.7373 16 9.99999C16.2627 10.2626 16.4711 10.5744 16.6133 10.9176C16.7554 11.2607 16.8286 11.6285 16.8286 12C16.8286 12.3714 16.7554 12.7393 16.6133 13.0824C16.4711 13.4256 16.2627 13.7374 16 14L13 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0001 12L12.0001 14C11.7374 14.2626 11.4256 14.471 11.0824 14.6131C10.7393 14.7553 10.3715 14.8284 10.0001 14.8284C9.24991 14.8284 8.53049 14.5304 8.00006 14C7.73741 13.7374 7.52907 13.4256 7.38693 13.0824C7.24479 12.7392 7.17163 12.3714 7.17163 12C7.17163 11.2499 7.46963 10.5304 8.00006 10L11.0001 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    