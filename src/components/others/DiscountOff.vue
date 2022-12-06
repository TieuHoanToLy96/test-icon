<script>
export default {
  name: 'discount-off',
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
<path d="M9 15L12 12M14 10L15 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.14788 9.14502C9.07655 9.21439 9.02764 9.30353 9.00744 9.40095C8.98724 9.49838 8.99669 9.59962 9.03457 9.69163C9.07245 9.78363 9.13702 9.86218 9.21995 9.91715C9.30289 9.97212 9.40039 10.001 9.49988 10C9.63063 10.0003 9.75627 9.94929 9.84988 9.85802" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1479 14.145C14.0766 14.2144 14.0276 14.3035 14.0074 14.401C13.9872 14.4984 13.9967 14.5996 14.0346 14.6916C14.0724 14.7836 14.137 14.8622 14.22 14.9172C14.3029 14.9721 14.4004 15.001 14.4999 15C14.6306 15.0003 14.7563 14.9493 14.8499 14.858" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.64091 5.63107C3.95175 7.31772 3.00178 9.6063 3 11.9934C2.99822 14.3804 3.94477 16.6704 5.63141 18.3596C7.31806 20.0487 9.60664 20.9987 11.9937 21.0005C14.3808 21.0023 16.6707 20.0557 18.3599 18.3691M20.0399 16.0511C20.893 14.3609 21.1914 12.4448 20.8926 10.5753C20.5938 8.70573 19.7131 6.97804 18.3757 5.63798C17.0383 4.29791 15.3123 3.41374 13.4434 3.11124C11.5745 2.80874 9.65775 3.10332 7.96591 3.95307" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    