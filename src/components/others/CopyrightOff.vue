<script>
export default {
  name: 'copyright-off',
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
<path d="M14 9.74994C13.7862 9.56181 13.5468 9.40492 13.289 9.28394M9.87902 9.87994C9.32294 10.4342 9.00691 11.1848 8.99905 11.9698C8.99119 12.7549 9.29214 13.5117 9.83702 14.0769C10.3754 14.6358 11.1085 14.9656 11.8838 14.9979C12.6592 15.0301 13.4171 14.7622 14 14.2499" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.042 16.0451C20.894 14.354 21.1909 12.4372 20.8904 10.5675C20.5899 8.69789 19.7074 6.97066 18.3684 5.63165C17.0294 4.29265 15.3022 3.41011 13.4325 3.10964C11.5629 2.80916 9.64608 3.10607 7.95495 3.9581M5.63695 5.6351C4.78989 6.46815 4.11615 7.46067 3.65459 8.55541C3.19303 9.65015 2.95278 10.8254 2.94771 12.0135C2.94264 13.2015 3.17285 14.3788 3.62505 15.4775C4.07725 16.5761 4.7425 17.5744 5.58242 18.4146C6.42234 19.2549 7.42032 19.9205 8.51878 20.3731C9.61724 20.8258 10.7944 21.0564 11.9825 21.0518C13.1706 21.0472 14.3459 20.8074 15.4409 20.3463C16.5358 19.8852 17.5286 19.2118 18.362 18.3651" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    