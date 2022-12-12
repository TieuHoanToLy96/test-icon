<script>
export default {
  name: 'coin-off',
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
<path d="M14.7999 8.99991C14.6188 8.68567 14.3556 8.42661 14.0385 8.25047C13.7214 8.07432 13.3624 7.98771 12.9999 7.99991H11.9999M9.1799 9.17091C9.04114 9.47556 8.98107 9.81018 9.0052 10.1441C9.02933 10.478 9.13689 10.8005 9.31801 11.082C9.49913 11.3635 9.74803 11.5951 10.0419 11.7555C10.3357 11.9158 10.6651 11.9999 10.9999 11.9999H11.9999M14.8239 14.8219C14.6656 15.1731 14.4093 15.471 14.0857 15.68C13.7621 15.889 13.3851 16.0001 12.9999 15.9999H10.9999C10.6374 16.0121 10.2784 15.9255 9.96132 15.7494C9.64425 15.5732 9.38105 15.3142 9.1999 14.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0421 16.0451C20.8941 14.354 21.191 12.4372 20.8905 10.5675C20.5901 8.69789 19.7075 6.97066 18.3685 5.63165C17.0295 4.29265 15.3023 3.41011 13.4326 3.10964C11.563 2.80916 9.6462 3.10607 7.95507 3.9581M5.63708 5.6351C4.79001 6.46815 4.11627 7.46067 3.65471 8.55541C3.19315 9.65015 2.95291 10.8254 2.94784 12.0135C2.94277 13.2015 3.17297 14.3788 3.62517 15.4775C4.07737 16.5761 4.74262 17.5744 5.58254 18.4146C6.42247 19.2549 7.42044 19.9205 8.5189 20.3731C9.61736 20.8258 10.7946 21.0564 11.9826 21.0518C13.1707 21.0472 14.3461 20.8074 15.441 20.3463C16.5359 19.8852 17.5287 19.2118 18.3621 18.3651" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V8M12 16V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    