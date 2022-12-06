<script>
export default {
  name: 'user-circle-minus',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1768 15C14.2478 15 15.9268 13.3211 15.9268 11.25C15.9268 9.17895 14.2478 7.50002 12.1768 7.50002C10.1057 7.50002 8.42675 9.17895 8.42675 11.25C8.42675 13.3211 10.1057 15 12.1768 15ZM12.1768 15C10.9306 15 9.70873 15.3449 8.64644 15.9964C7.58415 16.6479 6.72286 17.5806 6.15791 18.6913M12.1768 15C13.4229 15 14.6447 15.3448 15.707 15.9963C16.7693 16.6478 17.6306 17.5806 18.1956 18.6913M16.6768 5.25002H21.1768M20.6646 9.00002C21.3196 10.8567 21.3469 12.877 20.7426 14.7508C20.1382 16.6245 18.9355 18.2481 17.3191 19.3721C15.7028 20.4962 13.7621 21.0586 11.7952 20.9731C9.82823 20.8875 7.94375 20.1587 6.43109 18.8985C4.91844 17.6384 3.86125 15.9165 3.42185 13.9974C2.98245 12.0782 3.18514 10.0679 3.9988 8.27512C4.81246 6.48232 6.1921 5.00616 7.92586 4.07331C9.65963 3.14046 11.6517 2.80249 13.5961 3.1113" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    